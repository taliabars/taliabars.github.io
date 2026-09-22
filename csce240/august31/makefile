# makefile for 8/31
compiler = g++
flags = -Wall -std=c++17
compile = $(compiler) $(flags) -c
link = $(compiler) $(flags)

aug31 : aug31.o
		$(link) $^ -o $@
		./$@

aug31.o : aug31.cc
		$(compile) $<

clean : 
		rm *.o aug31