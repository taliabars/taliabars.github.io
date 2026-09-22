# single line comment in a make file
# $< = first prereq
# $^ = all prereqs
# $@ = target
# question on test: if I type make, what shows up?

compiler = g++
flags = -Wall -std=c++17
compile = $(compiler) $(flags) -c
link = $(compiler) $(flags)

aug26 : aug26.o
	$(link) $^ -o $@
	./$@

aug26.o : aug26.cc
	$(compile) $<

clean : 
	rm aug26 *.o