	.file	"pgcd.c"
	.text
.globl EuclidsGCD
	.type	EuclidsGCD, @function
EuclidsGCD:
	pushl	%ebp
	movl	%esp, %ebp
	subl	$16, %esp
.L3:
	movl	8(%ebp), %eax
	movl	%eax, %edx
	sarl	$31, %edx
	idivl	12(%ebp)
	movl	%eax, -4(%ebp)
	movl	8(%ebp), %eax
	movl	%eax, %edx
	sarl	$31, %edx
	idivl	12(%ebp)
	movl	%edx, -8(%ebp)
	cmpl	$0, -8(%ebp)
	jne	.L2
	movl	12(%ebp), %eax
	leave
	ret
.L2:
	movl	12(%ebp), %eax
	movl	%eax, 8(%ebp)
	movl	-8(%ebp), %eax
	movl	%eax, 12(%ebp)
	jmp	.L3
	.size	EuclidsGCD, .-EuclidsGCD
	.section	.rodata
.LC0:
	.string	"%d\n"
	.text
.globl main
	.type	main, @function
main:
	pushl	%ebp
	movl	%esp, %ebp
	andl	$-16, %esp
	subl	$32, %esp
	movl	$340823, 4(%esp)
	movl	$184347213, (%esp)
	call	EuclidsGCD
	movl	%eax, 28(%esp)
	movl	$.LC0, %eax
	movl	28(%esp), %edx
	movl	%edx, 4(%esp)
	movl	%eax, (%esp)
	call	printf
	leave
	ret
	.size	main, .-main
	.ident	"GCC: (Ubuntu 4.4.3-4ubuntu5.1) 4.4.3"
	.section	.note.GNU-stack,"",@progbits
