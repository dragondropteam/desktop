#build.py will compress files down removing the need for the large closure library.

# build: FORCE
# 	python build.py
#
mac:
	rm -rf node_modules
	npm install
	npm run-script rebuild
	python build.py
	build -m 
#
# mac:
# 	build -m
#
# linux:
# 	build -l --x64
#
# all:
# 	build -mwl --x64
#
# clean:
# 	rm -rf node_modules
#
# FORCE:
