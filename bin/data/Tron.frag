uniform vec2 u_resolution;
uniform float u_time;

#define PI 3.14159265359

void main() {
    vec3 light_color = vec3(0.2, 0.8, 0.6);
    
    float t = u_time * 20.0;
    
    vec2 position = (gl_FragCoord.xy - u_resolution.xy * 0.5) / u_resolution.x;
    
    float angle = atan(position.y, position.x) / (2.0 * PI);
    angle -= floor(angle);
    
    float rad = length(position);
    
    float color = 0.0;
    float brightness = 0.015;
    float speed = 0.3;
    
    for (int i = 0; i < 10; i++) {
        float angleRnd = floor(angle * 7.0) + 1.0;
        
        float angleRnd1 = fract(angleRnd * fract(angleRnd * 0.7235) * 45.1);
        float angleRnd2 = fract(angleRnd * fract(angleRnd * 0.82657) * 13.724);
        
        float t = t * speed + angleRnd1 * 10.;
        float radDist = sqrt(angleRnd2 + float(i));
        
        float adist = radDist / rad * 0.05;
        float dist = (t * 0.1 + adist);
        dist = abs(fract(dist) - 0.5);
        color +=  (1.0 / (dist)) * (0.05 / rad) * brightness;
        angle = fract(angle + 0.61);
    }
    gl_FragColor =  vec4(color,color,color,1.0) * vec4(light_color,1.0);
}