global main 
section .data
x1	DT  3.5    ; point1
y1	DT  1.6
x2	DT  25.2   ; point2
y2	DT  31.3

section .bss
dist	RESD 1  ; distance entre les points (convertie en  entier)

section .text
main: 
	FINIT       ; initialiser la pile
	FLD	tword [x1]	
	FLD	tword [x2]	
	FSUBP		
	FLD st0
	FMULP

	FLD	tword [y1]	
	FLD	tword [y2]	
	FSUBP		
	FLD st0
	FMULP
	
	FADDP
	FSQRT
	FISTP dword [dist]	

	MOV	eax,1 
	MOV	ebx,0  
	INT	0x80