#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

//Based on a raymarching experiment by kabuto
//http://glslsandbox.com/e#56769.0

const int MAXITER = 50;

vec3 field(vec3 p) {
	p *= .1;
	float f = -.2;
	for (int i = 0; i < 5; i++) {
		p = p.yzx*mat3(0.5,-0.8,0,-0.1,-1.0,0,0,0,0.65);
		p -= vec3(0.789,0.200,0.738)*float(i);
		p = abs(fract(p)-.5);
		p *= 2.0;
		f *= 2.0;
	}
	p *= p;
	return sqrt(p+p.yzx)/f-.002;
}

void main( void ) {
	vec3 dir = normalize(vec3((gl_FragCoord.xy-u_resolution*0.)/u_resolution.x,1.0));
	vec3 pos = vec3(0.0, 1.0, u_time*0.1);
	vec3 color = vec3(0);
	for (int i = 0; i < MAXITER; i++) {
		vec3 f2 = field(pos);
		float f = min(min(f2.x,f2.y),f2.z);
		
		pos += dir*f;
		color += float(MAXITER-i)/(f2+.001);
	}
	vec3 color2 = vec3(1.02-0.02/(0.9+color*(.1/float(MAXITER*MAXITER))));
	color2 *= color2;
	gl_FragColor = vec4(color2,1.);
}