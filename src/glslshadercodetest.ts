const code = `#version 300 es
precision mediump float;

#define M_PI 3.1415926535897932384626433832795
#define M_PI2 6.2831853071795864769252867675590

uniform vec2 u_resolution;
uniform float u_time;
out vec4 fragColor;


float t_number = .2; // @uniform slider(.1,3.,.01)
float t_zoom = -1.; // @uniform slider(.5,3.,.1)
float zoom = 1.; // @uniform slider(.1,2.,.01)
int divs = 1; // @uniform slider(1,16,1)
int iterations = 8; // @uniform slider(1,20,1)
float rotation = .0; // @uniform slider(-1,1,.1)

struct ColRamp {  // @uiui Color color_ramp()
    vec3 p;
    vec3 i;
};
float ramp[6] = float[6]( .1, .2, .3, 1., 1., 1.);

struct Tiles { // @uiui Tiling panel()
    float a; // @uiui Ammount slider(0., 1., .1)
    float z; // @uiui Zoom slider(0., 1., .1)
};
struct Main { // @uiui Settings panel()
    int d; // @uiui Divisions slider(0., 1., .1)
    int i; // @uiui Iterations slider(0., 1., .1)
    float r; // @uiui Rotation slider(0., 1., .1)
    Tiles t; // @uiui
};


Main one = Main(
    4,
    8,
    .0,
    Tiles(
        .2,
        1.
    )
);
Main two = Main(5, 9, .1, Tiles(.3, 4.));
Tiles threeTiles = Tiles(.5, 6.);
Main three = Main(0, 1, .2, threeTiles);

float n_sin(float x) {
  return sin(x) * .5 + .5;
}

float pt = 2. + 2.;
`;

export default code ;
