COMILE_DEST ?= lib
COMILE_SRC ?= src

package: test
	@npm pack

test: compile
	@npm test

compile:
	coffee --compile --output $(COMILE_DEST) $(COMILE_SRC)


.PHONY: compile
