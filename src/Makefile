
all: choice.exe

# Watcom has different flag for output file name at compile vs link
_CFLAGS = $(subst -fe=,-fo=,$(CFLAGS))

kitten.obj: ../kitten/kitten.c
	$(CC) $(_CFLAGS)$@ -c $^

tnyprntf.obj: ../tnyprntf/tnyprntf.c
	$(CC) $(_CFLAGS)$@ -c $^

choice.exe choice.com: choice.c $(EXTRA_OBJS)
	$(CC) $(CFLAGS)$@ $^ $(LDFLAGS)
	$(UPXARGS) $@

clean:
	$(RM) choice.exe
	$(RM) choice.com
	$(RM) *.o
	$(RM) *.obj
	$(RM) *.map
