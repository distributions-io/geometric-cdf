options( digits = 16 )
library( jsonlite )

p = 0.6
x = 0:24
y = pgeom( x, p )

cat( y, sep = ",\n" )

data = list(
	p = p,
	data = x,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
