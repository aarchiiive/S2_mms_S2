package user;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class UserDAO {
	
	private Connection conn; //데이터베이스에 접근하는 객체
	private PreparedStatement pstmt; 
	private ResultSet rs;  //정보를 담는 객체
	
	public UserDAO() {  //데이터 접근 객체
		try {
			String dbURL = "jdbc:mysql://localhost:3306/BBS";
			//String dbURL = "jdbc:mysql://localhost:3306/BBS?characterEncoding=UTF-8&serverTimezone=UTC" ;
			String dbID = "root";  //root계정
			String dbPassword = "961210";  //root계정의 비번
			//Class.forName("com.mysql.cj.jdbc.Driver"); 
			Class.forName("com.mysql.jdbc.Driver"); //mysql 드라이버 
			conn = DriverManager.getConnection(dbURL, dbID, dbPassword);
		} catch (Exception e) {   //오류가 발생시, 어떤 오류인지 알려줌
			e.printStackTrace(); 
		}
	}

	//로그인 함수
	public int login(String id, String password) {
		String SQL = "SELECT PASSWORD FROM USER WHERE ID =?";
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, id);  //userId를 ?에 넣기
			rs = pstmt.executeQuery();   //실행결과 넣기
			if (rs.next()) {
				if(rs.getString(1).equals(password)) {
					return 1; // 로그인 성공
				}
				else
					return 0; // 비밀번호 불일치 
			}
			return -1;	// 아이디가 없음(결과값이 나오지 않을때)
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return -2; // 데이터베이스 오류
	}
	
	public int join(User user) {
		String SQL ="INSERT INTO USER VALUES(?,?,?,?)";   
		try {
			pstmt = conn.prepareStatement(SQL);
			pstmt.setString(1, user.getName());
			pstmt.setString(2, user.getPhonenumber());
			pstmt.setString(3, user.getId());
			pstmt.setString(4, user.getPassword());
			return pstmt.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return -1;  //데이터베이스 오류
	}
}