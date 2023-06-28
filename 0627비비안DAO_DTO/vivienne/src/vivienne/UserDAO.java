package vivienne;
import java.sql.*;
import java.util.*;
import vivienne.UserDTO;
/**  
 * UserDAO
 */
public class UserDAO {
         
    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;
        
    public UserDAO(){  
        try {
            String URL = "jdbc:mysql://localhost:3306/vivienne";
            String ID = "root";
            String PW = "1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(URL, ID, PW);
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }


    public int signup(UserDTO userDTO){
        String SQL = "INSERT INTO vivienne_member(user_email, user_name, user_pw, user_gender, user_hp, user_service, user_birth) VALUES(?,?,?,?,?,?,?)";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getUser_email());
            ps.setString(2, userDTO.getUser_name());
            ps.setString(3, userDTO.getUser_pw());
            ps.setString(4, userDTO.getUser_gender());
            ps.setString(5, userDTO.getUser_hp());
            ps.setString(6, userDTO.getUser_service());
            ps.setString(7, userDTO.getUser_birth());
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return -1;
    }

    public int signin(String user_email, String user_pw){
        String SQL = "SELECT user_pw FROM vivienne_member WHERE user_email = ?";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_email);

            rs = ps.executeQuery();
            if(rs.next()){
                if(rs.getString("user_pw").equals(user_pw)){
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else {
                return -1;
            }
        } catch (Exception e){
            e.printStackTrace ();
        }
        finally {
            try {
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return -2;
    }

        
    public int update(UserDTO userDTO){
        String SQL = "UPDATE vivienne_member SET user_name=?, user_pw=?, user_gender=?, user_hp=?, user_service=?, user_birth=? WHERE user_email=?";
        try {       
            ps = conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getUser_name());
            ps.setString(2, userDTO.getUser_pw());
            ps.setString(3, userDTO.getUser_gender());
            ps.setString(4, userDTO.getUser_hp());
            ps.setString(5, userDTO.getUser_service());
            ps.setString(6, userDTO.getUser_birth());
            ps.setString(7, userDTO.getUser_email());
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }    
        return -1;
    }
              
    // 개인정보 수정 
    public UserDTO getJoin(String user_email){
        UserDTO userDTO = new UserDTO(); 

        String SQL = "SELECT * FROM vivienne_member WHERE user_email=?";
        try { 
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_email);
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
                userDTO.setUser_email(rs.getString("user_email"));
                userDTO.setUser_name(rs.getString("user_name"));
                userDTO.setUser_pw(rs.getString("user_pw"));
                userDTO.setUser_gender(rs.getString("user_gender"));
                userDTO.setUser_hp(rs.getString("user_hp"));
                userDTO.setUser_service(rs.getString("user_service"));
                userDTO.setUser_birth(rs.getString("user_birth"));
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        finally {
            try {
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch(Exception e){
                e.printStackTrace();
            }
        }
        return userDTO;
    }
       
    // 가입 회원 전체리스트 목록 가져오기 
    public List<UserDTO> getJoinList(){
        UserDTO userDTO = new UserDTO();
        List<UserDTO> list = new ArrayList<>();
        String SQL = "SELECT * FROM vivienne_member";
        try {
            ps = conn.prepareStatement(SQL);
            rs = ps.executeQuery();
            while(rs.next()){
                userDTO.setIdx(rs.getInt("idx"));
                userDTO.setUser_email(rs.getString("user_email"));
                userDTO.setUser_name(rs.getString("user_name"));
                userDTO.setUser_pw(rs.getString("user_pw"));
                userDTO.setUser_gender(rs.getString("user_gender"));
                userDTO.setUser_hp(rs.getString("user_hp"));
                userDTO.setUser_service(rs.getString("user_service"));
                userDTO.setUser_birth(rs.getString("user_birth"));
                userDTO.setCreate_date(rs.getString("create_date"));
                list.add(userDTO);
            }
        }catch(Exception e){
            e.printStackTrace();
        }
        finally {
            try {
                if(rs!= null){rs.close();}
                if(ps!= null){ps.close();}
                if(conn!= null){conn.close();}
            }
            catch(Exception e) {
                e.printStackTrace();
            }
        }
        return list;
    }

}