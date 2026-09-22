# makefile for sept2
compile = g++ -Wall -c
link = g++ -Wall

a.out : sept2.o myfunctions.o
		$(link) $^

sept2.o : sept2.cc myfunctions.h
		$(compile) $<

myfunctions.o : myfunctions.cc myfunctions.h
		$(compile) $<

clean :
		rm *.o a.out