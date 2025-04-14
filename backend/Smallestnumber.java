public class Smallestnumber
{
	public static void main(String[] args) {
	    int a=10;
	    int b=20;
	    int c=3;
	    int smallest=(a<b)?((a<c)?a:c):((b<c)?b:c);
		System.out.println("the smallest number is "+smallest);
	}
}