import {
  FFLiiGetAdjustedEyeH,
  FFLiiGetAdjustedMouthH,
  FFLiiGetEyebrowRotateOffset,
  FFLiiGetEyeRotateOffset,
  type FFLiCharInfo,
} from "../src/detail/FFLiCharInfo";
import {
  POS_X_ADD_MOLE,
  POS_X_MUL,
  POS_Y_ADD_EYE,
  POS_Y_ADD_EYEBROW,
  POS_Y_ADD_MOLE,
  POS_Y_ADD_MOUTH,
  POS_Y_ADD_MUSTACHE,
  POS_Y_MUL,
  SPACING_MUL,
} from "../tables/position";

export enum FFLiOriginPosition {
  FFLI_ORIGIN_POSITION_CENTER = 0,
  FFLI_ORIGIN_POSITION_RIGHT = 1,
  FFLI_ORIGIN_POSITION_LEFT = 2,
}

export type FFLVec2 = { x: number; y: number };

export interface FFLiRawMaskPartsDesc {
  pos: FFLVec2;
  scale: FFLVec2;
  rot: number;
  originPos: FFLiOriginPosition;
}

export type RawMasks = {
  rawMaskPartsDescEye: FFLiRawMaskPartsDesc[];
  rawMaskPartsDescEyebrow: FFLiRawMaskPartsDesc[];
  rawMaskPartsDescMouth: FFLiRawMaskPartsDesc;
  rawMaskPartsDescMustache: FFLiRawMaskPartsDesc[];
  rawMaskPartsDescMole: FFLiRawMaskPartsDesc;
};

export function CalcRawMask(
  pRawMasks: RawMasks,
  pCharInfo: FFLiCharInfo,
  resolution: number,
  leftEyeIndex: number,
  rightEyeIndex: number
) {
  // f32 baseScale = resolution * (1.f / 64.f);
  const baseScale = resolution * (1 / 64);
  // f32 eyeSpacingX = pCharInfo->parts.eyeSpacingX * SPACING_MUL;
  const eyeSpacingX = pCharInfo.parts.eyeSpacingX * SPACING_MUL;
  // f32 eyeBaseScale = 0.4f * pCharInfo->parts.eyeScale + 1.0f;
  const eyeBaseScale = 0.4 * pCharInfo.parts.eyeScale + 1.0;
  // f32 eyeBaseScaleY = 0.12f * pCharInfo->parts.eyeScaleY + 0.64f;
  const eyeBaseScaleY = 0.12 * pCharInfo.parts.eyeScaleY + 0.64;
  // f32 eyeScaleX = 5.34375f * eyeBaseScale;
  const eyeScaleX = 5.34375 * eyeBaseScale;
  // f32 eyeScaleY = 4.5f * eyeBaseScale * eyeBaseScaleY;
  const eyeScaleY = 4.5 * eyeBaseScale * eyeBaseScaleY;
  // f32 eyePosY = pCharInfo->parts.eyePositionY * POS_Y_MUL + POS_Y_ADD_EYE;
  const eyePosY = pCharInfo.parts.eyePositionY * POS_Y_MUL + POS_Y_ADD_EYE;
  // s32 eyeBaseRotate = pCharInfo->parts.eyeRotate + FFLiiGetEyeRotateOffset(pCharInfo->parts.eyeType);
  const eyeBaseRotate =
    pCharInfo.parts.eyeRotate +
    FFLiiGetEyeRotateOffset(pCharInfo.parts.eyeType);
  // f32 eyeRotate = (eyeBaseRotate % 32) * (360.f / 32.f);
  const eyeRotate = (eyeBaseRotate % 32) * (360 / 32);
  // f32 eyebrowSpacingX = pCharInfo->parts.eyebrowSpacingX * SPACING_MUL;
  const eyebrowSpacingX = pCharInfo.parts.eyebrowSpacingX * SPACING_MUL;
  // f32 eyebrowBaseScale = 0.4f * pCharInfo->parts.eyebrowScale + 1.0f;
  const eyebrowBaseScale = 0.4 * pCharInfo.parts.eyebrowScale + 1.0;
  // f32 eyebrowBaseScaleY = 0.12f * pCharInfo->parts.eyebrowScaleY + 0.64f;
  const eyebrowBaseScaleY = 0.12 * pCharInfo.parts.eyebrowScaleY + 0.64;
  // f32 eyebrowScaleX = 5.0625f * eyebrowBaseScale;
  const eyebrowScaleX = 5.0625 * eyebrowBaseScale;
  // f32 eyebrowScaleY = 4.5f * eyebrowBaseScale * eyebrowBaseScaleY;
  const eyebrowScaleY = 4.5 * eyebrowBaseScale * eyebrowBaseScaleY;
  // f32 eyebrowPosY = pCharInfo->parts.eyebrowPositionY * POS_Y_MUL + POS_Y_ADD_EYEBROW;
  const eyebrowPosY =
    pCharInfo.parts.eyebrowPositionY * POS_Y_MUL + POS_Y_ADD_EYEBROW;
  // s32 eyebrowBaseRotate = pCharInfo->parts.eyebrowRotate + FFLiiGetEyebrowRotateOffset(pCharInfo->parts.eyebrowType);
  const eyebrowBaseRotate =
    pCharInfo.parts.eyebrowRotate +
    FFLiiGetEyebrowRotateOffset(pCharInfo.parts.eyebrowType);
  // f32 eyebrowRotate = (eyebrowBaseRotate % 32) * (360.0f / 32);
  const eyebrowRotate = (eyebrowBaseRotate % 32) * (360 / 32);
  // f32 mouthBaseScale = 0.4f * pCharInfo->parts.mouthScale + 1.0f;
  const mouthBaseScale = 0.4 * pCharInfo.parts.mouthScale + 1.0;
  // f32 mouthBaseScaleY = 0.12f * pCharInfo->parts.mouthScaleY + 0.64f;
  const mouthBaseScaleY = 0.12 * pCharInfo.parts.mouthScaleY + 0.64;
  // f32 mouthScaleX = 6.1875f * mouthBaseScale;
  const mouthScaleX = 6.1875 * mouthBaseScale;
  // f32 mouthScaleY = 4.5f * mouthBaseScale * mouthBaseScaleY;
  const mouthScaleY = 4.5 * mouthBaseScale * mouthBaseScaleY;
  // f32 mouthPosY = pCharInfo->parts.mouthPositionY * POS_Y_MUL + POS_Y_ADD_MOUTH;
  const mouthPosY =
    pCharInfo.parts.mouthPositionY * POS_Y_MUL + POS_Y_ADD_MOUTH;
  // f32 mustacheBaseScale = 0.4f * pCharInfo->parts.mustacheScale + 1.0f;
  const mustacheBaseScale = 0.4 * pCharInfo.parts.mustacheScale + 1.0;
  // f32 mustacheScaleX = 4.5f * mustacheBaseScale;
  const mustacheScaleX = 4.5 * mustacheBaseScale;
  // f32 mustacheScaleY = 9.0f * mustacheBaseScale;
  const mustacheScaleY = 9.0 * mustacheBaseScale;

  // f32 mustachePosY = pCharInfo->parts.mustachePositionY * POS_Y_MUL + POS_Y_ADD_MUSTACHE;
  const mustachePosY =
    pCharInfo.parts.mustachePositionY * POS_Y_MUL + POS_Y_ADD_MUSTACHE;

  // f32 moleScale = 0.4f * pCharInfo->parts.moleScale + 1.0f;
  const moleScale = 0.4 * pCharInfo.parts.moleScale + 1.0;

  // f32 molePosX = pCharInfo->parts.molePositionX * POS_X_MUL + POS_X_ADD_MOLE;
  const molePosX = pCharInfo.parts.molePositionX * POS_X_MUL + POS_X_ADD_MOLE;
  // f32 molePosY = pCharInfo->parts.molePositionY * POS_Y_MUL + POS_Y_ADD_MOLE;
  const molePosY = pCharInfo.parts.molePositionY * POS_Y_MUL + POS_Y_ADD_MOLE;

  // pRawMasks->rawMaskPartsDescEye[0].pos.x = (32 - eyeSpacingX) * baseScale;
  pRawMasks.rawMaskPartsDescEye[0].pos.x = (32 - eyeSpacingX) * baseScale;
  // pRawMasks->rawMaskPartsDescEye[0].pos.y = eyePosY * baseScale;
  pRawMasks.rawMaskPartsDescEye[0].pos.y = eyePosY * baseScale;
  // pRawMasks->rawMaskPartsDescEye[0].scale.x = eyeScaleX * baseScale;
  pRawMasks.rawMaskPartsDescEye[0].scale.x = eyeScaleX * baseScale;
  // pRawMasks->rawMaskPartsDescEye[0].scale.y = FFLiiGetAdjustedEyeH(eyeScaleY * baseScale, leftEyeIndex);
  pRawMasks.rawMaskPartsDescEye[0].scale.y = FFLiiGetAdjustedEyeH(
    eyeScaleY * baseScale,
    leftEyeIndex
  );
  // pRawMasks->rawMaskPartsDescEye[0].rot = eyeRotate;
  pRawMasks.rawMaskPartsDescEye[0].rot = eyeRotate;
  // pRawMasks->rawMaskPartsDescEye[0].originPos = FFLI_ORIGIN_POSITION_LEFT;
  pRawMasks.rawMaskPartsDescEye[0].originPos =
    FFLiOriginPosition.FFLI_ORIGIN_POSITION_LEFT;

  // pRawMasks->rawMaskPartsDescEye[1].pos.x = (eyeSpacingX + 32) * baseScale;
  // pRawMasks->rawMaskPartsDescEye[1].pos.y = eyePosY * baseScale;
  // pRawMasks->rawMaskPartsDescEye[1].scale.x = eyeScaleX * baseScale;
  // pRawMasks->rawMaskPartsDescEye[1].scale.y = FFLiiGetAdjustedEyeH(eyeScaleY * baseScale, rightEyeIndex);
  // pRawMasks->rawMaskPartsDescEye[1].rot = 360.0f - eyeRotate;
  // pRawMasks->rawMaskPartsDescEye[1].originPos = FFLI_ORIGIN_POSITION_RIGHT;
  pRawMasks.rawMaskPartsDescEye[1].pos.x = (eyeSpacingX + 32) * baseScale;
  pRawMasks.rawMaskPartsDescEye[1].pos.y = eyePosY * baseScale;
  pRawMasks.rawMaskPartsDescEye[1].scale.x = eyeScaleX * baseScale;
  pRawMasks.rawMaskPartsDescEye[1].scale.y = FFLiiGetAdjustedEyeH(
    eyeScaleY * baseScale,
    rightEyeIndex
  );
  pRawMasks.rawMaskPartsDescEye[1].rot = 360.0 - eyeRotate;
  pRawMasks.rawMaskPartsDescEye[1].originPos =
    FFLiOriginPosition.FFLI_ORIGIN_POSITION_RIGHT;

  // pRawMasks->rawMaskPartsDescEyebrow[0].pos.x = (32 - eyebrowSpacingX) * baseScale;
  // pRawMasks->rawMaskPartsDescEyebrow[0].pos.y = eyebrowPosY * baseScale;
  // pRawMasks->rawMaskPartsDescEyebrow[0].scale.x = eyebrowScaleX * baseScale;
  // pRawMasks->rawMaskPartsDescEyebrow[0].scale.y = eyebrowScaleY * baseScale;
  // pRawMasks->rawMaskPartsDescEyebrow[0].rot = eyebrowRotate;
  // pRawMasks->rawMaskPartsDescEyebrow[0].originPos = FFLI_ORIGIN_POSITION_LEFT;
  pRawMasks.rawMaskPartsDescEyebrow[0].pos.x =
    (32 - eyebrowSpacingX) * baseScale;
  pRawMasks.rawMaskPartsDescEyebrow[0].pos.y = eyebrowPosY * baseScale;
  pRawMasks.rawMaskPartsDescEyebrow[0].scale.x = eyebrowScaleX * baseScale;
  pRawMasks.rawMaskPartsDescEyebrow[0].scale.y = eyebrowScaleY * baseScale;
  pRawMasks.rawMaskPartsDescEyebrow[0].rot = eyebrowRotate;
  pRawMasks.rawMaskPartsDescEyebrow[0].originPos =
    FFLiOriginPosition.FFLI_ORIGIN_POSITION_LEFT;

  // pRawMasks->rawMaskPartsDescEyebrow[1].pos.x = (eyebrowSpacingX + 32) * baseScale;
  // pRawMasks->rawMaskPartsDescEyebrow[1].pos.y = eyebrowPosY * baseScale;
  // pRawMasks->rawMaskPartsDescEyebrow[1].scale.x = eyebrowScaleX * baseScale;
  // pRawMasks->rawMaskPartsDescEyebrow[1].scale.y = eyebrowScaleY * baseScale;
  // pRawMasks->rawMaskPartsDescEyebrow[1].rot = 360.0f - eyebrowRotate;
  // pRawMasks->rawMaskPartsDescEyebrow[1].originPos = FFLI_ORIGIN_POSITION_RIGHT;
  pRawMasks.rawMaskPartsDescEyebrow[1].pos.x =
    (eyebrowSpacingX + 32) * baseScale;
  pRawMasks.rawMaskPartsDescEyebrow[1].pos.y = eyebrowPosY * baseScale;
  pRawMasks.rawMaskPartsDescEyebrow[1].scale.x = eyebrowScaleX * baseScale;
  pRawMasks.rawMaskPartsDescEyebrow[1].scale.y = eyebrowScaleY * baseScale;
  pRawMasks.rawMaskPartsDescEyebrow[1].rot = 360.0 - eyebrowRotate;
  pRawMasks.rawMaskPartsDescEyebrow[1].originPos =
    FFLiOriginPosition.FFLI_ORIGIN_POSITION_RIGHT;

  // pRawMasks->rawMaskPartsDescMouth.pos.x = 32 * baseScale;
  // pRawMasks->rawMaskPartsDescMouth.pos.y = mouthPosY * baseScale;
  // pRawMasks->rawMaskPartsDescMouth.scale.x = mouthScaleX * baseScale;
  // pRawMasks->rawMaskPartsDescMouth.scale.y = FFLiiGetAdjustedMouthH(mouthScaleY * baseScale, pCharInfo->parts.mouthType);
  // pRawMasks->rawMaskPartsDescMouth.rot = 0.0f;
  // pRawMasks->rawMaskPartsDescMouth.originPos = FFLI_ORIGIN_POSITION_CENTER;
  pRawMasks.rawMaskPartsDescMouth.pos.x = 32 * baseScale;
  pRawMasks.rawMaskPartsDescMouth.pos.y = mouthPosY * baseScale;
  pRawMasks.rawMaskPartsDescMouth.scale.x = mouthScaleX * baseScale;
  pRawMasks.rawMaskPartsDescMouth.scale.y = FFLiiGetAdjustedMouthH(
    mouthScaleY * baseScale,
    pCharInfo.parts.mouthType
  );
  pRawMasks.rawMaskPartsDescMouth.rot = 0.0;
  pRawMasks.rawMaskPartsDescMouth.originPos =
    FFLiOriginPosition.FFLI_ORIGIN_POSITION_CENTER;

  // pRawMasks->rawMaskPartsDescMustache[0].pos.x = 32 * baseScale;
  // pRawMasks->rawMaskPartsDescMustache[0].pos.y = mustachePosY * baseScale;
  // pRawMasks->rawMaskPartsDescMustache[0].scale.x = mustacheScaleX * baseScale;
  // pRawMasks->rawMaskPartsDescMustache[0].scale.y = mustacheScaleY * baseScale;
  // pRawMasks->rawMaskPartsDescMustache[0].rot = 0.0f;
  // pRawMasks->rawMaskPartsDescMustache[0].originPos = FFLI_ORIGIN_POSITION_LEFT;
  pRawMasks.rawMaskPartsDescMustache[0].pos.x = 32 * baseScale;
  pRawMasks.rawMaskPartsDescMustache[0].pos.y = mustachePosY * baseScale;
  pRawMasks.rawMaskPartsDescMustache[0].scale.x = mustacheScaleX * baseScale;
  pRawMasks.rawMaskPartsDescMustache[0].scale.y = mustacheScaleY * baseScale;
  pRawMasks.rawMaskPartsDescMustache[0].rot = 0.0;
  pRawMasks.rawMaskPartsDescMustache[0].originPos =
    FFLiOriginPosition.FFLI_ORIGIN_POSITION_LEFT;

  // pRawMasks->rawMaskPartsDescMustache[1].pos.x = 32 * baseScale;
  // pRawMasks->rawMaskPartsDescMustache[1].pos.y = mustachePosY * baseScale;
  // pRawMasks->rawMaskPartsDescMustache[1].scale.x = mustacheScaleX * baseScale;
  // pRawMasks->rawMaskPartsDescMustache[1].scale.y = mustacheScaleY * baseScale;
  // pRawMasks->rawMaskPartsDescMustache[1].rot = 0.0f;
  // pRawMasks->rawMaskPartsDescMustache[1].originPos = FFLI_ORIGIN_POSITION_RIGHT;
  pRawMasks.rawMaskPartsDescMustache[1].pos.x = 32 * baseScale;
  pRawMasks.rawMaskPartsDescMustache[1].pos.y = mustachePosY * baseScale;
  pRawMasks.rawMaskPartsDescMustache[1].scale.x = mustacheScaleX * baseScale;
  pRawMasks.rawMaskPartsDescMustache[1].scale.y = mustacheScaleY * baseScale;
  pRawMasks.rawMaskPartsDescMustache[1].rot = 0.0;
  pRawMasks.rawMaskPartsDescMustache[1].originPos =
    FFLiOriginPosition.FFLI_ORIGIN_POSITION_RIGHT;

  // pRawMasks->rawMaskPartsDescMole.pos.x = molePosX * baseScale;
  // pRawMasks->rawMaskPartsDescMole.pos.y = molePosY * baseScale;
  // pRawMasks->rawMaskPartsDescMole.scale.x = moleScale * baseScale;
  // pRawMasks->rawMaskPartsDescMole.scale.y = moleScale * baseScale;
  // pRawMasks->rawMaskPartsDescMole.rot = 0.0f;
  // pRawMasks->rawMaskPartsDescMole.originPos = FFLI_ORIGIN_POSITION_CENTER;
  pRawMasks.rawMaskPartsDescMole.pos.x = molePosX * baseScale;
  pRawMasks.rawMaskPartsDescMole.pos.y = molePosY * baseScale;
  pRawMasks.rawMaskPartsDescMole.scale.x = moleScale * baseScale;
  pRawMasks.rawMaskPartsDescMole.scale.y = moleScale * baseScale;
  pRawMasks.rawMaskPartsDescMole.rot = 0.0;
  pRawMasks.rawMaskPartsDescMole.originPos =
    FFLiOriginPosition.FFLI_ORIGIN_POSITION_CENTER;
}

type FFLiRawMaskDrawParam = {};
type FFLiRawMaskTextureDesc = {};

// export function FFLiInitDrawParamRawMask(pDrawParam: FFLiRawMaskDrawParam, pCharInfo:FFLiCharInfo, resolution:number,  leftEyeIndex:number,  rightEyeIndex:number, pDesc:FFLiRawMaskTextureDesc)
// {
//     RawMasks rawMasks;
//     CalcRawMask(&rawMasks, pCharInfo, resolution, leftEyeIndex, rightEyeIndex);

//     const rio::OrthoProjection proj = rio::OrthoProjection(-200.0f, 200.0f, 0.0f, resolution, 0.0f, resolution);
//     const rio::BaseMtx44f& projMatrix = proj.getMatrix();

//     if (pDesc->pTexturesMustache[0] != NULL) {
//         FFLiInitModulateMustache(&pDrawParam->drawParamRawMaskPartsMustache[0].modulateParam, pCharInfo->parts.beardColor, *(pDesc->pTexturesMustache[0]));
//         FFLiInitDrawParamRawMaskParts(&(pDrawParam->drawParamRawMaskPartsMustache[0]), &(rawMasks.rawMaskPartsDescMustache[0]), &projMatrix);
//     } else {
//         pDrawParam->drawParamRawMaskPartsMustache[0].modulateParam.pTexture2D = NULL;
//     }

//     if (pDesc->pTexturesMustache[1] != NULL) {
//         FFLiInitModulateMustache(&pDrawParam->drawParamRawMaskPartsMustache[1].modulateParam, pCharInfo->parts.beardColor, *(pDesc->pTexturesMustache[1]));
//         FFLiInitDrawParamRawMaskParts(&(pDrawParam->drawParamRawMaskPartsMustache[1]), &(rawMasks.rawMaskPartsDescMustache[1]), &projMatrix);
//     } else {
//         pDrawParam->drawParamRawMaskPartsMustache[1].modulateParam.pTexture2D = NULL;
//     }

//     FFLiInitModulateMouth(&pDrawParam->drawParamRawMaskPartsMouth.modulateParam, pCharInfo->parts.mouthColor, *pDesc->pTextureMouth);
//     FFLiInitDrawParamRawMaskParts(&pDrawParam->drawParamRawMaskPartsMouth, &rawMasks.rawMaskPartsDescMouth, &projMatrix);

//     // for all new AFL/miitomo mouth types past 37/type 12...
//     // ... they actually do not need colors
//     if (pCharInfo->parts.mouthType > 37)
//         pDrawParam->drawParamRawMaskPartsMouth.modulateParam.mode = FFL_MODULATE_MODE_1;

//     if (pDesc->pTexturesEyebrow[0] != NULL) {
//         FFLiInitModulateEyebrow(&pDrawParam->drawParamRawMaskPartsEyebrow[0].modulateParam, pCharInfo->parts.eyebrowColor, *(pDesc->pTexturesEyebrow[0]));
//         FFLiInitDrawParamRawMaskParts(&(pDrawParam->drawParamRawMaskPartsEyebrow[0]), &(rawMasks.rawMaskPartsDescEyebrow[0]), &projMatrix);
//     } else {
//         pDrawParam->drawParamRawMaskPartsEyebrow[0].modulateParam.pTexture2D = NULL;
//     }

//     if (pDesc->pTexturesEyebrow[0] != NULL) {
//         FFLiInitModulateEyebrow(&pDrawParam->drawParamRawMaskPartsEyebrow[1].modulateParam, pCharInfo->parts.eyebrowColor, *(pDesc->pTexturesEyebrow[1]));
//         FFLiInitDrawParamRawMaskParts(&(pDrawParam->drawParamRawMaskPartsEyebrow[1]), &(rawMasks.rawMaskPartsDescEyebrow[1]), &projMatrix);
//     } else {
//         pDrawParam->drawParamRawMaskPartsEyebrow[1].modulateParam.pTexture2D = NULL;
//     }

//     FFLiInitModulateEye(&pDrawParam->drawParamRawMaskPartsEye[0].modulateParam, pCharInfo->parts.eyeColor, pCharInfo->parts.eyeType, *(pDesc->pTexturesEye[0]));
//     FFLiInitModulateEye(&pDrawParam->drawParamRawMaskPartsEye[1].modulateParam, pCharInfo->parts.eyeColor, pCharInfo->parts.eyeType, *(pDesc->pTexturesEye[1]));

//     // for certain eye indices (only testing left eye index for now)...
//     // ... exclude color entirely by setting modulate mode to 1
//     for (s32 i = 0; i < EXCLUDE_COLOR_FROM_EYE_TEXTURE_TYPES_SIZE; i++) {
//         if (excludeColorFromEyeTextureTypes[i] == leftEyeIndex) {
//             pDrawParam->drawParamRawMaskPartsEye[0].modulateParam.mode = FFL_MODULATE_MODE_1;
//             pDrawParam->drawParamRawMaskPartsEye[1].modulateParam.mode = FFL_MODULATE_MODE_1;
//             break;
//         }
//     }

//     FFLiInitDrawParamRawMaskParts(&(pDrawParam->drawParamRawMaskPartsEye[0]), &(rawMasks.rawMaskPartsDescEye[0]), &projMatrix);
//     FFLiInitDrawParamRawMaskParts(&(pDrawParam->drawParamRawMaskPartsEye[1]), &(rawMasks.rawMaskPartsDescEye[1]), &projMatrix);

//     if (pDesc->pTextureMole != NULL) {
//         FFLiInitModulateMole(&pDrawParam->drawParamRawMaskPartsMole.modulateParam, *pDesc->pTextureMole);
//         FFLiInitDrawParamRawMaskParts(&pDrawParam->drawParamRawMaskPartsMole, &rawMasks.rawMaskPartsDescMole, &projMatrix);
//     } else {
//         pDrawParam->drawParamRawMaskPartsMole.modulateParam.pTexture2D = NULL;
//     }

//     FFLiInitModulateFill(&pDrawParam->drawParamRawMaskPartsFill.modulateParam);
//     FFLiInitDrawParamRawMaskPartsFill(&pDrawParam->drawParamRawMaskPartsFill);
// }
