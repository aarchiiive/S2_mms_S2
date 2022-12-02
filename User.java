package user;

public class User {
	private String name;
	private String phonenumber;
	private String id;
	private String password;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
	    this.name = name;
	}
	
	public String getPhonenumber() {
		return phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
