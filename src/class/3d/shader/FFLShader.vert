// https://jsfiddle.net/arian_/8gvynrdu/6/
// position, texCoord (uv), normal are all provided by three.js

// 頂点シェーダーに入力される attribute 変数
//attribute vec4 position;       //!< 入力: 位置情報
//attribute vec2 uv;             //!< 入力: テクスチャー座標
//attribute vec3 normal;         //!< 入力: 法線ベクトル

// color is not actually the vertex color, as such
// it is a custom attribute _COLOR in the glTF

attribute vec4 _color;           //!< 入力: 頂点の色
attribute vec3 tangent;          //!< 入力: 異方位

// フラグメントシェーダーへの入力
varying   vec4 v_color;          //!< 出力: 頂点の色
varying   vec4 v_position;       //!< 出力: 位置情報
varying   vec3 v_normal;         //!< 出力: 法線ベクトル
varying   vec3 v_tangent;        //!< 出力: 異方位
varying   vec2 v_texCoord;       //!< 出力: テクスチャー座標

// normalMatrix, modelViewMatrix, and projectionMatrix are provided by three.js
// ユニフォーム
//uniform mat3 normalMatrix;     //!< ユニフォーム: モデルの法線用行列
//uniform mat4 modelViewMatrix;  //!< ユニフォーム: プロジェクション行列
//uniform mat4 projectionMatrix; //!< ユニフォーム: モデル行列

void main()
{
//#ifdef FFL_COORDINATE_MODE_NORMAL
    // 頂点座標を変換
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    v_position = modelViewMatrix * vec4(position, 1.0);

    // 法線も変換
    //v_normal = mat3(inverse(u_mv)) * a_normal;
    v_normal = normalize(normalMatrix * normal);
//#elif defined(FFL_COORDINATE_MODE_NONE)
//    // 頂点座標を変換
//    gl_Position = vec4(a_position.x, a_position.y * -1.0, a_position.z, a_position.w);
//    v_position = a_position;
//
//    v_normal = a_normal;
//#endif

     // その他の情報も書き出す
    v_texCoord = uv;
    v_tangent = normalize(normalMatrix * tangent.xyz);
    v_color = _color;
}