# Minimal Makefile for CHOICE

all: choice.exe

UPX=upx --8086
# if you don't want to use UPX set
#     UPX=-rem (DOS)
#   or
#     UPX=true (Unix)
# if you use UPX: then options are
#     --8086 for 8086 compatibility
#   or
#     --best for smallest

choice.exe choice.com: choice.c prf.c ../kitten/kitten.c
	$(CC) $(CFLAGS)$@ $^ $(LDFLAGS)
	$(UPX) $@

_choice.exe _choice.com: choice.c prf.c
	$(CC) $(CFLAGS)$@ $^ $(LDFLAGS)
	$(UPX) $@

clean:
	$(RM) choice.exe
	$(RM) choice.com
	$(RM) _choice.exe
	$(RM) _choice.com
	$(RM) *.o
	$(RM) *.obj
