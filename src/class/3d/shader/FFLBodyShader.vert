uniform vec3 lightDir;

// uniform mat4 u_proj;
// uniform mat4 u_view;
// uniform mat4 u_world;

varying vec3 v_lightDir;
//out vec3 v_normal;
//out vec4 v_position;

layout(location = 0) in vec3 i_position0;
//layout(location = 1) in vec2 i_texCoord0; // UNUSED but provided by RIO
layout(location = 2) in vec3 i_normal0;

void main()
{
    vec4 worldPosition = u_world * vec4(i_position0, 1.0);
    vec4 viewPosition = view * worldPosition;
    gl_Position = proj * viewPosition;

    v_position = viewPosition;

    v_normal = mat3(world * u_view) * i_normal0; // Transform normal with world and view matrices

    //v_lightDir = normalize(-mat3(u_view) * lightDir.xyz); // is view or light dir supposed to be negative...
    v_lightDir = mat3(u_view) * lightDir;
}
