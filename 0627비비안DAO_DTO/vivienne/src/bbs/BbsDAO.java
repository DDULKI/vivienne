package bbs;
import java.sql.*;

public class BbsDAO {
    private Connection conn;
    private PreparedStatement ps; 
    private ResultSet rs; 

    public BbsDAO() {
        try {
            String DBURL = "jdbc:mysql://localhost:3306/vivienne";
            String DBID = "root";
            String DBPW = "1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String getDate(){
        String SQL = "SELECT now()";
        try {
            PreparedStatement ps = conn.prepareStatement(SQL);
            rs = ps.executeQuery();
            if(rs.next()){
                return rs.getString(1);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ""; // 데이터베이스 오류 
    }

    // 게시글 번호 
    public int getNumber() {
        String SQL = "SELECT bbsId FROM bbs ORDER BY bbsId DESC";

        try {
            PreparedStatement ps = conn.prepareStatement(SQL);
            rs = ps.executeQuery();
            if(rs.next()) {
                return rs.getInt(1) + 1;
            }
            return 1; // 첫번째 입력할 글 번호 측 = > 저장된 게시글이 한개도 없을 때... 
        } catch (Exception e) {
            e.printStackTrace();
        }
        return -1; // 데이터베이스 오류 
    }

    // 게시판 글쓰기 메서드 
    public int write(String user_email, String subject, String content){
        String SQL = "INSERT INTO bbs VALUES(?,?,?,?,?,?)";

        try {
            PreparedStatement ps = conn.prepareStatement(SQL);
            ps.setInt(1, getNumber());
            ps.setString(2, user_email);
            ps.setString(3, subject);
            ps.setString(4, content);
            ps.setString(5, getDate());
            ps.setInt(6, 1);
            return ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return -1;
    }

    // 글보기 하나의 글목록 내용을 전달해준다. 
    public BbsDTO getView(int bbsId) {
        String SQL = "SELECT * FROM bbs WHERE bbsId = ?";
        try {
            PreparedStatement ps = conn.prepareStatement(SQL);
            ps.setInt(1, bbsId);
            rs = ps.executeQuery();
            while(rs.next()){
                BbsDTO bbsDTO = new BbsDTO();
                bbsDTO.setBbsId(rs.getInt(1));
                bbsDTO.setUser_email(rs.getString(2));
                bbsDTO.setSubject(rs.getString(3));
                bbsDTO.setContent(rs.getString(4));
                bbsDTO.setWriteDate(rs.getString(5));
                bbsDTO.setDeleteOK(rs.getInt(6));
                return bbsDTO;
            }
        } catch (Exception e) {

        }
        return null;
    }

    // member table과 bbs table join 해서 member의 이메일이 현재 로그인된 이메일인 bbs를 불러옴 
    public List<BbsDTO> select(String user_email){
        BbsDTO bbsDTO = null;
        List<BbsDTO> list = new ArrayList<>();
        String SQL = "SELECT * FROM vivienne_member m JOIN bbs b ON where m.user_email=? && b.user_email=?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_email);
            ps.setString(2, user_email);
            rs = ps.executeQuery();
            while(rs.next()){
                bbsDTO = new BbsDTO();
                bbsDTO.setBbsId(rs.getInt("b.bbsId"));
                bbsDTO.setSubject(rs.getString("subject"));
                bbsDTO.setContent(rs.getString("content"));
                bbsDTO.setWriteDate(rs.getString("writeDate"));
                bbsDTO.setDeleteOK(rs.getInt("deleteOK"));
                list.add(bbsDTO);
            }
            return list;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }


}


