options( digits = 16 )
library( jsonlite )

p = 0.3
x = c( -5, -2.5, 0, 2.5, 5 )
y = pgeom( x, p )

cat( y, sep = ",\n" )

data = list(
	p = p,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
