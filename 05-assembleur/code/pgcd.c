//D'après http://en.wikibooks.org/wiki/X86_Disassembly/Optimization_Examples

#include<stdlib.h>
#include<stdio.h>

int EuclidsGCD(int m, int n) /*we want to find the GCD of m and n*/ {
 	int q, r; /*q is the quotient, r is the remainder*/
 	while(1)
 	{
 		q = m / n; /*find q and r*/
 		r = m % n;
 		if(r == 0) /*if r is 0, return our n value*/
 		{
 			return n;
 		}
 		m = n; /*set m to the current n value*/
 		n = r; /*set n to our current remainder value*/
 	} /*repeat*/
}
 
int main (){
	int gcd = EuclidsGCD(184347213, 340823);
	printf("%d\n",gcd);
}
