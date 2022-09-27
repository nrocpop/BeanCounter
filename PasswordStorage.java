package word;
import java.util.*;	

public class PasswordStorage {

	static String pssword="";
	
	public PasswordStorage() {
		// TODO Auto-generated constructor stub
	}
	
	public static void main(String[] args) {
		
		pssword=salts("lancemale");
		//salts("lancemale");
		int hashCode=hashing(pssword);
		
		System.out.println(hashCode);
	}
	
	/*static void salts(String sentence) {
		Random r = new Random();
		int rand =r.nextInt(5)+1;
		int rand2 =r.nextInt(5)+1;
		//String sentence = "";
		
		for(int i=0; i<1;i++) {
			char c = (char)(r.nextInt(26) + 'a');
			sentence+=c;
			
			for(int k =0; k<7;k++) {
				char v = (char)(r.nextInt(26) + 'a');
				int num= r.nextInt(5)+1;
				sentence+=num;
				sentence+=v;
				
			}
			}
		//return sentence;
		System.out.println(sentence);
		
		
	}
	*/
	
	static String salts(String sentence) {
		
		char[] ALPHANUMERIC  
    ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+][|:;'<,>?/`~".toCharArray();
		
		StringBuilder sbuild= new StringBuilder();
		for(int i=0; i<=15;i++) {
			int index = (int) (Math.random()*ALPHANUMERIC.length);
            sbuild.append(ALPHANUMERIC[index]);
		}
		sentence+=sbuild;
		System.out.println(sentence);
		return sentence;
	}
      
	static int hashing(String code) {
		//get hash code
		int hashCode=code.hashCode();
		//System.out.println(code.hashCode());
		//return hashcode
		return hashCode;
	}
	
	void updatePassword() {
		
	}
	void verifyPassword() {
		
	}

}
