package bbs;

public class BbsDTO {
    private int bbsId;
    private String user_email;
    private String subject;
    private String content;
    private String writeDate;
    private int deleteOK;

    public int getBbsId() {
        return this.bbsId;
    }

    public void setBbsId(int bbsId) {
        this.bbsId = bbsId;
    }

    public String getUser_email() {
        return this.user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getSubject() {
        return this.subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getWriteDate() {
        return this.writeDate;
    }

    public void setWriteDate(String writeDate) {
        this.writeDate = writeDate;
    }

    public int getDeleteOK() {
        return this.deleteOK;
    }

    public void setDeleteOK(int deleteOK) {
        this.deleteOK = deleteOK;
    }

}
