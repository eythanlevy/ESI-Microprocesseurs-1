int main(){
	int i;
	for (i=0; i< 1000; ++i)
		printf("%dn\n", i);
	asm("movl $1, %eax");
	return 0;
}