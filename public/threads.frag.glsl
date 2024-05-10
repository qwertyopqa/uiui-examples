#version 300 es
precision highp float;

#define M_PI 3.1415926535897932384626433832795
#define M_PI2 6.2831853071795864769252867675590

/**
 * @uiui:Panel Iterations [ iterations, highFiImpact ]
 * @uiui:Panel Main [ tickness, Iterations, zoom ]
 * @uiui:Panel Shape [ shape, cohesion ]
 * @uiui:Panel HighFreq [ highFBase, highFOsc ]
**/

uniform vec2 u_resolution;
uniform float u_time;
out vec4 fragColor;

vec3 getRamp(in float p) {
    p = mod(p, 1.);
    return vec3(.5)
        + sin(
            p * M_PI2 + M_PI2 * vec3(.1,.3,.5)
        )
        * .5;
}

float zoom = .7; // @uiui:Slider Zoom  (.1, 1.,  .1)
float tickness = .5; // @uiui:Slider Tickness (0., 3., .01)
float iterations = 100.; // @uiui:Slider Amount (10., 200., 1.)
float highFOsc[2] = float[2](.1, .1); // @uiui:Sine OSC (.3, 1., .01, 0.1, 2., .01)
float highFiImpact = .2; // @uiui:Slider Impact on HF (0., 1., .01)
float highFBase = .1; // @uiui:Slider Base (0.1, 5., .01)

float shape[2] = float[2](3.5, 3.5); // @uiui:Point Multiplier (.5, 5., .5, .5, 5., .5)
float cohesion = .1; // @uiui:Slider Cohesion (0.1, .5, .01)
void main()
{
    float hFB = highFBase * highFBase;
    float ch = cohesion * cohesion;

    vec2 p = gl_FragCoord.xy / u_resolution.x - vec2(.5) * vec2(1., u_resolution.y / u_resolution.x);
    p /= zoom; // lazy zooming
    vec3 col = vec3(0.);
    float AT = atan(p.y, p.x);

    for(float i = 0.; i < iterations; i++) {
      float iF = i / iterations;
      float mm = cos(u_time * highFOsc[0]) * highFOsc[1] + hFB * ((iF + 1.) * highFiImpact);
      float a = (AT + mod(u_time  * highFOsc[0], M_PI2)) - iF * highFOsc[1];// * abs(cos(u_time * iF) * iF * .01 ) + sin(AT * 5.1 + u_time * .2) + iF * .5;
      vec2 np = (vec2(cos(a * shape[0]) , sin(a * shape[1]) * 1.) / iF * .1) - p;
      float n = mod(atan(np.x , np.y), M_PI2) / M_PI2;
      float d = abs(length(np) - .5 + ch * sin(AT * mm) );
      col += d > (0.0005 + 0.001 * tickness) ? vec3(0.001) : getRamp(n + AT * .0007)*(.004 * float(i) - d * 10.);
      AT += M_PI2;
    }
    fragColor = vec4(col, 1.);
}
