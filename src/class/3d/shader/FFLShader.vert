/******************************************************//**
 * @file    sample.vsh
 * @brief   Vertex Shader
 * Copyright (c) 2014 Nintendo Co., Ltd. All rights reserved.
 **********************************************************/

#ifdef GL_ES
precision highp float;
#else
#   define lowp
#   define mediump
#   define highp
#endif

// 頂点シェーダーに入力される attribute 変数
attribute vec4 a_position;   //!< 入力: 位置情報
attribute vec2 a_texCoord;   //!< 入力: テクスチャー座標
attribute vec3 a_normal;     //!< 入力: 法線ベクトル
attribute vec4 a_color;      //!< 入力: 頂点の色
attribute vec3 a_tangent;    //!< 入力: 異方位

// フラグメントシェーダーへの入力
varying   vec4 v_color;      //!< 出力: 頂点の色
varying   vec4 v_position;   //!< 出力: 位置情報
varying   vec3 v_normal;     //!< 出力: 法線ベクトル
varying   vec3 v_tangent;    //!< 出力: 異方位
varying   vec2 v_texCoord;   //!< 出力: テクスチャー座標

// ユニフォーム
uniform   mat3 u_it;         //!< ユニフォーム: モデルの法線用行列
uniform   mat4 u_mv;         //!< ユニフォーム: プロジェクション行列
uniform   mat4 u_proj;       //!< ユニフォーム: モデル行列

void main()
{
//#ifdef FFL_COORDINATE_MODE_NORMAL
    // 頂点座標を変換
    gl_Position = u_proj * u_mv * a_position;
    v_position = u_mv * a_position;

    // 法線も変換
    //v_normal = mat3(inverse(u_mv)) * a_normal;
    v_normal = normalize(u_it * a_normal);
//#elif defined(FFL_COORDINATE_MODE_NONE)
//    // 頂点座標を変換
//    gl_Position = vec4(a_position.x, a_position.y * -1.0, a_position.z, a_position.w);
//    v_position = a_position;
//
//    v_normal = a_normal;
//#endif

     // その他の情報も書き出す
    v_texCoord = a_texCoord;
    v_tangent = normalize(u_it * a_tangent);
    v_color = a_color;
}