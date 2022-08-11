package fowler.oo_abusers.switch_statements.after;

public class Triangle extends Shape {
	
	public Triangle(int size) {
		super(size);
	}
	
	@Override
	public void print() {
		for(int i = 1; i <= size; i++){
			for(int j = 0; j < i; j++){
				System.out.print("*");
			}
			System.out.println("");
		}
	}

	@Override
	public int charNeeded() {
		return ((size+1) * size) / 2;
	}

}