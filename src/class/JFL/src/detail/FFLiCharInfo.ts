/*
#include <nn/ffl/FFLAdditionalInfo.h>

#include <nn/ffl/FFLiCreateID.h>
#include <nn/ffl/FFLiMisc.h>
#include <nn/ffl/FFLiUtil.h>

#include <nn/ffl/FFLiColor.h>

#include <nn/ffl/detail/FFLiCharInfo.h>

#include <cstring>

namespace {

bool VerifyName(const u16* s, s32 size);

bool CompareMiiVersion(const FFLiCharInfo* a, const FFLiCharInfo* b);
bool CompareCopyable(const FFLiCharInfo* a, const FFLiCharInfo* b);
bool CompareLocalOnly(const FFLiCharInfo* a, const FFLiCharInfo* b);
bool CompareRegionMove(const FFLiCharInfo* a, const FFLiCharInfo* b);
bool CompareBirthPlatform(const FFLiCharInfo* a, const FFLiCharInfo* b);

}

bool FFLiVerifyCharInfo(const FFLiCharInfo* pCharInfo, bool verifyName)
{
    return FFLiiVerifyCharInfo(pCharInfo, verifyName);
}

FFLiVerifyCharInfoReason FFLiVerifyCharInfoWithReason(const FFLiCharInfo* pCharInfo, bool verifyName)
{
    if (!FFLiRange<s32>(0, FFL_FACE_TYPE_MAX - 1, pCharInfo->parts.faceType))
        return FFLI_VERIFY_CHAR_INFO_REASON_FACE_TYPE_INVALID;

    if (!FFLiRange<s32>(0, NNMII_FACELINE_COLOR_MAX - 1, pCharInfo->parts.facelineColor))
        return FFLI_VERIFY_CHAR_INFO_REASON_FACELINE_COLOR_INVALID;

    if (!FFLiRange<s32>(0, FFL_FACE_LINE_MAX - 1, pCharInfo->parts.faceLine))
        return FFLI_VERIFY_CHAR_INFO_REASON_FACE_LINE_INVALID;

    if (!FFLiRange<s32>(0, FFL_FACE_MAKE_MAX - 1, pCharInfo->parts.faceMakeup))
        return FFLI_VERIFY_CHAR_INFO_REASON_FACE_MAKE_INVALID;

    if (!FFLiRange<s32>(0, FFL_HAIR_TYPE_MAX - 1, pCharInfo->parts.hairType))
        return FFLI_VERIFY_CHAR_INFO_REASON_HAIR_TYPE_INVALID;

    if (isCommonColorMarked(pCharInfo->parts.hairColor)) {
        if (!FFLiRange<s32>(0, NNMII_COMMON_COLOR_MAX - 1, unmarkCommonColor(pCharInfo->parts.hairColor)))
            return FFLI_VERIFY_CHAR_INFO_REASON_HAIR_COLOR_INVALID;
    } else {
        if (!FFLiRange<s32>(0, FFL_HAIR_COLOR_MAX - 1, pCharInfo->parts.hairColor))
            return FFLI_VERIFY_CHAR_INFO_REASON_HAIR_COLOR_INVALID;
    }

    if (!FFLiRange<s32>(0, FFL_HAIR_DIR_MAX - 1, pCharInfo->parts.hairDir))
        return FFLI_VERIFY_CHAR_INFO_REASON_HAIR_DIR_INVALID;

    if (!FFLiRange<s32>(0, FFL_EYE_TYPE_DATA_MAX - 1, pCharInfo->parts.eyeType))
        return FFLI_VERIFY_CHAR_INFO_REASON_EYE_TYPE_INVALID;

    if (isCommonColorMarked(pCharInfo->parts.eyeColor)) {
        if (!FFLiRange<s32>(0, NNMII_COMMON_COLOR_MAX - 1, unmarkCommonColor(pCharInfo->parts.eyeColor)))
            return FFLI_VERIFY_CHAR_INFO_REASON_EYE_COLOR_INVALID;
    } else {
        if (!FFLiRange<s32>(0, FFL_EYE_COLOR_MAX - 1, pCharInfo->parts.eyeColor))
            return FFLI_VERIFY_CHAR_INFO_REASON_EYE_COLOR_INVALID;
    }

    if (!FFLiRange<s32>(0, FFL_EYE_SCALE_MAX - 1, pCharInfo->parts.eyeScale))
        return FFLI_VERIFY_CHAR_INFO_REASON_EYE_SCALE_INVALID;

    if (!FFLiRange<s32>(0, FFL_EYE_SCALE_Y_MAX - 1, pCharInfo->parts.eyeScaleY))
        return FFLI_VERIFY_CHAR_INFO_REASON_EYE_SCALE_Y_INVALID;

    if (!FFLiRange<s32>(0, FFL_EYE_ROTATE_MAX - 1, pCharInfo->parts.eyeRotate))
        return FFLI_VERIFY_CHAR_INFO_REASON_EYE_ROTATE_INVALID;

    if (!FFLiRange<s32>(0, FFL_EYE_SPACING_MAX - 1, pCharInfo->parts.eyeSpacingX))
        return FFLI_VERIFY_CHAR_INFO_REASON_EYE_SPACING_INVALID;

    if (!FFLiRange<s32>(0, FFL_EYE_POS_MAX - 1, pCharInfo->parts.eyePositionY))
        return FFLI_VERIFY_CHAR_INFO_REASON_EYE_POS_INVALID;

    if (!FFLiRange<s32>(0, FFL_EYEBROW_TYPE_MAX - 1, pCharInfo->parts.eyebrowType))
        return FFLI_VERIFY_CHAR_INFO_REASON_EYEBROW_TYPE_INVALID;

    if (isCommonColorMarked(pCharInfo->parts.eyebrowColor)) {
        if (!FFLiRange<s32>(0, NNMII_COMMON_COLOR_MAX - 1, unmarkCommonColor(pCharInfo->parts.eyebrowColor)))
            return FFLI_VERIFY_CHAR_INFO_REASON_EYEBROW_COLOR_INVALID;
    } else {
        if (!FFLiRange<s32>(0, FFL_EYEBROW_COLOR_MAX - 1, pCharInfo->parts.eyebrowColor))
            return FFLI_VERIFY_CHAR_INFO_REASON_EYEBROW_COLOR_INVALID;
    }

    if (!FFLiRange<s32>(0, FFL_EYEBROW_SCALE_MAX - 1, pCharInfo->parts.eyebrowScale))
        return FFLI_VERIFY_CHAR_INFO_REASON_EYEBROW_SCALE_INVALID;

    if (!FFLiRange<s32>(0, FFL_EYEBROW_SCALE_Y_MAX - 1, pCharInfo->parts.eyebrowScaleY))
        return FFLI_VERIFY_CHAR_INFO_REASON_EYEBROW_SCALE_Y_INVALID;

    if (!FFLiRange<s32>(0, FFL_EYEBROW_ROTATE_MAX - 1, pCharInfo->parts.eyebrowRotate))
        return FFLI_VERIFY_CHAR_INFO_REASON_EYEBROW_ROTATE_INVALID;

    if (!FFLiRange<s32>(0, FFL_EYEBROW_SPACING_MAX - 1, pCharInfo->parts.eyebrowSpacingX))
        return FFLI_VERIFY_CHAR_INFO_REASON_EYEBROW_SPACING_INVALID;

    if (!FFLiRange<s32>(FFL_EYEBROW_POS_MIN, FFL_EYEBROW_POS_MAX - 1, pCharInfo->parts.eyebrowPositionY))
        return FFLI_VERIFY_CHAR_INFO_REASON_EYEBROW_POS_INVALID;

    if (!FFLiRange<s32>(0, FFL_NOSE_TYPE_MAX - 1, pCharInfo->parts.noseType))
        return FFLI_VERIFY_CHAR_INFO_REASON_NOSE_TYPE_INVALID;

    if (!FFLiRange<s32>(0, FFL_NOSE_SCALE_MAX - 1, pCharInfo->parts.noseScale))
        return FFLI_VERIFY_CHAR_INFO_REASON_NOSE_SCALE_INVALID;

    if (!FFLiRange<s32>(0, FFL_NOSE_POS_MAX - 1, pCharInfo->parts.nosePositionY))
        return FFLI_VERIFY_CHAR_INFO_REASON_NOSE_POS_INVALID;

    if (!FFLiRange<s32>(0, FFL_MOUTH_TYPE_DATA_MAX - 1, pCharInfo->parts.mouthType))
        return FFLI_VERIFY_CHAR_INFO_REASON_MOUTH_TYPE_INVALID;

    if (isCommonColorMarked(pCharInfo->parts.mouthColor)) {
        if (!FFLiRange<s32>(0, NNMII_COMMON_COLOR_MAX - 1, unmarkCommonColor(pCharInfo->parts.mouthColor)))
            return FFLI_VERIFY_CHAR_INFO_REASON_MOUTH_COLOR_INVALID;
    } else {
        if (!FFLiRange<s32>(0, FFL_MOUTH_COLOR_MAX - 1, pCharInfo->parts.mouthColor))
            return FFLI_VERIFY_CHAR_INFO_REASON_MOUTH_COLOR_INVALID;
    }

    if (!FFLiRange<s32>(0, FFL_MOUTH_SCALE_MAX - 1, pCharInfo->parts.mouthScale))
        return FFLI_VERIFY_CHAR_INFO_REASON_MOUTH_SCALE_INVALID;

    if (!FFLiRange<s32>(0, FFL_MOUTH_SCALE_Y_MAX - 1, pCharInfo->parts.mouthScaleY))
        return FFLI_VERIFY_CHAR_INFO_REASON_MOUTH_SCALE_Y_INVALID;

    if (!FFLiRange<s32>(0, FFL_MOUTH_POS_MAX - 1, pCharInfo->parts.mouthPositionY))
        return FFLI_VERIFY_CHAR_INFO_REASON_MOUTH_POS_INVALID;

    if (!FFLiRange<s32>(0, FFL_MUSTACHE_TYPE_MAX - 1, pCharInfo->parts.mustacheType))
        return FFLI_VERIFY_CHAR_INFO_REASON_MUSTACHE_TYPE_INVALID;

    if (!FFLiRange<s32>(0, FFL_BEARD_TYPE_MAX - 1, pCharInfo->parts.beardType))
        return FFLI_VERIFY_CHAR_INFO_REASON_BEARD_TYPE_INVALID;

    if (isCommonColorMarked(pCharInfo->parts.beardColor)) {
        if (!FFLiRange<s32>(0, NNMII_COMMON_COLOR_MAX - 1, unmarkCommonColor(pCharInfo->parts.beardColor)))
            return FFLI_VERIFY_CHAR_INFO_REASON_BEARD_COLOR_INVALID;
    } else {
        if (!FFLiRange<s32>(0, FFL_BEARD_COLOR_MAX - 1, pCharInfo->parts.beardColor))
            return FFLI_VERIFY_CHAR_INFO_REASON_BEARD_COLOR_INVALID;
    }

    if (!FFLiRange<s32>(0, FFL_MUSTACHE_SCALE_MAX - 1, pCharInfo->parts.mustacheScale))
        return FFLI_VERIFY_CHAR_INFO_REASON_MUSTACHE_SCALE_INVALID;

    if (!FFLiRange<s32>(0, FFL_MUSTACHE_POS_MAX - 1, pCharInfo->parts.mustachePositionY))
        return FFLI_VERIFY_CHAR_INFO_REASON_MUSTACHE_POS_INVALID;

    // NOTE: we DO NOT HAVE a specific flag for whether new glass types
    // are supported, so as a HACK we are using glass color
    if (isCommonColorMarked(pCharInfo->parts.glassColor)) {
        // TODO: replace 20 with extended glass types enum, potentially
        if (!FFLiRange<s32>(0, 20 - 1, pCharInfo->parts.glassType))
            return FFLI_VERIFY_CHAR_INFO_REASON_GLASS_TYPE_INVALID;
    } else {
        if (!FFLiRange<s32>(0, FFL_GLASS_TYPE_MAX - 1, pCharInfo->parts.glassType))
            return FFLI_VERIFY_CHAR_INFO_REASON_GLASS_TYPE_INVALID;
    }

    if (isCommonColorMarked(pCharInfo->parts.glassColor)) {
        if (!FFLiRange<s32>(0, NNMII_COMMON_COLOR_MAX - 1, unmarkCommonColor(pCharInfo->parts.glassColor)))
            return FFLI_VERIFY_CHAR_INFO_REASON_GLASS_COLOR_INVALID;
    } else {
        if (!FFLiRange<s32>(0, FFL_GLASS_COLOR_MAX - 1, pCharInfo->parts.glassColor))
            return FFLI_VERIFY_CHAR_INFO_REASON_GLASS_COLOR_INVALID;
    }

    if (!FFLiRange<s32>(0, FFL_GLASS_SCALE_MAX - 1, pCharInfo->parts.glassScale))
        return FFLI_VERIFY_CHAR_INFO_REASON_GLASS_SCALE_INVALID;

    if (!FFLiRange<s32>(0, FFL_GLASS_POS_MAX - 1, pCharInfo->parts.glassPositionY))
        return FFLI_VERIFY_CHAR_INFO_REASON_GLASS_POS_INVALID;

    if (!FFLiRange<s32>(0, FFL_MOLE_TYPE_MAX - 1, pCharInfo->parts.moleType))
        return FFLI_VERIFY_CHAR_INFO_REASON_MOLE_TYPE_INVALID;

    if (!FFLiRange<s32>(0, FFL_MOLE_SCALE_MAX - 1, pCharInfo->parts.moleScale))
        return FFLI_VERIFY_CHAR_INFO_REASON_MOLE_SCALE_INVALID;

    if (!FFLiRange<s32>(0, FFL_MOLE_POS_X_MAX - 1, pCharInfo->parts.molePositionX))
        return FFLI_VERIFY_CHAR_INFO_REASON_MOLE_POS_X_INVALID;

    if (!FFLiRange<s32>(0, FFL_MOLE_POS_Y_MAX - 1, pCharInfo->parts.molePositionY))
        return FFLI_VERIFY_CHAR_INFO_REASON_MOLE_POS_Y_INVALID;

    if (verifyName)
    {
        if (pCharInfo->name[0] == L'\0' || !VerifyName(pCharInfo->name, 10))
            return FFLI_VERIFY_CHAR_INFO_REASON_NAME_INVALID;

        if (!VerifyName(pCharInfo->creatorName, 10))
            return FFLI_VERIFY_CHAR_INFO_REASON_CREATOR_NAME_INVALID;
    }

    if (pCharInfo->height > 128)
        return FFLI_VERIFY_CHAR_INFO_REASON_HEIGHT_INVALID;

    if (pCharInfo->build > 128)
        return FFLI_VERIFY_CHAR_INFO_REASON_BUILD_INVALID;

    if (pCharInfo->gender > 1)
        return FFLI_VERIFY_CHAR_INFO_REASON_GENDER_INVALID;

    if (!FFLiVerifyBirthday(pCharInfo->birthMonth, pCharInfo->birthDay))
        return FFLI_VERIFY_CHAR_INFO_REASON_BIRTHDAY_INVALID;

    if (pCharInfo->favoriteColor > 11)
        return FFLI_VERIFY_CHAR_INFO_REASON_FAVORITE_COLOR_INVALID;

    if (pCharInfo->regionMove > 3)
        return FFLI_VERIFY_CHAR_INFO_REASON_REGION_MOVE_INVALID;

    if (pCharInfo->fontRegion > 3)
        return FFLI_VERIFY_CHAR_INFO_REASON_FONT_REGION_INVALID;

    if (pCharInfo->pageIndex > 9)
        return FFLI_VERIFY_CHAR_INFO_REASON_PAGE_INDEX_INVALID;

    if (pCharInfo->slotIndex > 9)
        return FFLI_VERIFY_CHAR_INFO_REASON_SLOT_INDEX_INVALID;

    if (!(1 <= pCharInfo->birthPlatform && pCharInfo->birthPlatform <= 7))
        return FFLI_VERIFY_CHAR_INFO_REASON_BIRTH_PLATFORM_INVALID;

    if (FFLiIsValidMiiID(&pCharInfo->creatorID) && !FFLiIsNormalMiiID(&pCharInfo->creatorID) && !pCharInfo->localOnly)
        return FFLI_VERIFY_CHAR_INFO_REASON_CREATOR_ID_INVALID;

    return FFLI_VERIFY_CHAR_INFO_REASON_OK;
}

bool FFLiiVerifyCharInfo(const FFLiCharInfo* pCharInfo, bool verifyName)
{
    return FFLiVerifyCharInfoWithReason(pCharInfo, verifyName) == FFLI_VERIFY_CHAR_INFO_REASON_OK;
}

s32 FFLiiGetEyeRotateOffset(s32 type)
{
    static const u8 ROTATE[FFL_EYE_TYPE_TRUE_MAX] = {
        3, 4, 4, 4,
        3, 4, 4, 4,
        3, 4, 4, 4,
        4, 3, 3, 4,
        4, 4, 3, 3,
        4, 3, 4, 3,
        3, 4, 3, 4,
        4, 3, 4, 4,
        4, 3, 3, 3,
        4, 4, 3, 3,
        3, 4, 4, 3,
        3, 3, 3, 3,
        3, 3, 3, 3,
        4, 4, 4, 4,
        3, 4, 4, 3,
        4, 4, 4, 4,

        4, 4, 4, 4,
        4, 4, 4, 4,
        4, 4, 4, 4,
        4, 4, 4, 4
    };
    return 32 - ROTATE[type];
}

s32 FFLiiGetEyebrowRotateOffset(s32 type)
{
    static const u8 ROTATE[FFL_EYEBROW_TYPE_MAX] = {
        6, 6, 5, 7,
        6, 7, 6, 7,
        4, 7, 6, 8,
        5, 5, 6, 6,
        7, 7, 6, 6,
        5, 6, 7, 5,

        6, 6, 6, 6
    };
    return 32 - ROTATE[type];
}

f32 FFLiiGetAdjustedMouthH(f32 height, s32 type)
{
    switch (type)
    {
    case 3:
    case 15:
    case 19:
    case 20:
    case 21:
    case 23:
    case 25:
        if (height < 12)
            height = 12;
    }
    return height;
}

f32 FFLiiGetAdjustedEyeH(f32 height, s32 type)
{
    switch (type)
    {
    case 14:
    case 26:
        if (height < 12)
            height = 12;
    }
    return height;
}

bool FFLiIsValidCharacterForName(u16 c)
{
    if (c == L'%' || c == L'\\')
        return false;

    return true;
}

bool FFLiCompareCharInfoWithAdditionalInfo(s32* pFlagOut, s32 flagIn, const FFLiCharInfo* pCharInfoA, const FFLiCharInfo* pCharInfoB, const FFLAdditionalInfo* pAdditionalInfoA, const FFLAdditionalInfo* pAdditionalInfoB)
{
    s32 flag = 0;
    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_PARTS)
    {
        if (pCharInfoA->parts.faceType != pCharInfoB->parts.faceType ||
            pCharInfoA->parts.facelineColor != pCharInfoB->parts.facelineColor ||
            pCharInfoA->parts.faceLine != pCharInfoB->parts.faceLine ||
            pCharInfoA->parts.faceMakeup != pCharInfoB->parts.faceMakeup ||
            pCharInfoA->parts.hairType != pCharInfoB->parts.hairType ||
            pCharInfoA->parts.hairColor != pCharInfoB->parts.hairColor ||
            pCharInfoA->parts.hairDir != pCharInfoB->parts.hairDir ||
            pCharInfoA->parts.eyeType != pCharInfoB->parts.eyeType ||
            pCharInfoA->parts.eyeColor != pCharInfoB->parts.eyeColor ||
            pCharInfoA->parts.eyeScale != pCharInfoB->parts.eyeScale ||
            pCharInfoA->parts.eyeScaleY != pCharInfoB->parts.eyeScaleY ||
            pCharInfoA->parts.eyeRotate != pCharInfoB->parts.eyeRotate ||
            pCharInfoA->parts.eyeSpacingX != pCharInfoB->parts.eyeSpacingX ||
            pCharInfoA->parts.eyePositionY != pCharInfoB->parts.eyePositionY ||
            pCharInfoA->parts.eyebrowType != pCharInfoB->parts.eyebrowType ||
            pCharInfoA->parts.eyebrowColor != pCharInfoB->parts.eyebrowColor ||
            pCharInfoA->parts.eyebrowScale != pCharInfoB->parts.eyebrowScale ||
            pCharInfoA->parts.eyebrowScaleY != pCharInfoB->parts.eyebrowScaleY ||
            pCharInfoA->parts.eyebrowRotate != pCharInfoB->parts.eyebrowRotate ||
            pCharInfoA->parts.eyebrowSpacingX != pCharInfoB->parts.eyebrowSpacingX ||
            pCharInfoA->parts.eyebrowPositionY != pCharInfoB->parts.eyebrowPositionY ||
            pCharInfoA->parts.noseType != pCharInfoB->parts.noseType ||
            pCharInfoA->parts.noseScale != pCharInfoB->parts.noseScale ||
            pCharInfoA->parts.nosePositionY != pCharInfoB->parts.nosePositionY ||
            pCharInfoA->parts.mouthType != pCharInfoB->parts.mouthType ||
            pCharInfoA->parts.mouthColor != pCharInfoB->parts.mouthColor ||
            pCharInfoA->parts.mouthScale != pCharInfoB->parts.mouthScale ||
            pCharInfoA->parts.mouthScaleY != pCharInfoB->parts.mouthScaleY ||
            pCharInfoA->parts.mouthPositionY != pCharInfoB->parts.mouthPositionY ||
            pCharInfoA->parts.mustacheType != pCharInfoB->parts.mustacheType ||
            pCharInfoA->parts.beardType != pCharInfoB->parts.beardType ||
            pCharInfoA->parts.beardColor != pCharInfoB->parts.beardColor ||
            pCharInfoA->parts.mustacheScale != pCharInfoB->parts.mustacheScale ||
            pCharInfoA->parts.mustachePositionY != pCharInfoB->parts.mustachePositionY ||
            pCharInfoA->parts.glassType != pCharInfoB->parts.glassType ||
            pCharInfoA->parts.glassColor != pCharInfoB->parts.glassColor ||
            pCharInfoA->parts.glassScale != pCharInfoB->parts.glassScale ||
            pCharInfoA->parts.glassPositionY != pCharInfoB->parts.glassPositionY ||
            pCharInfoA->parts.moleType != pCharInfoB->parts.moleType ||
            pCharInfoA->parts.moleScale != pCharInfoB->parts.moleScale ||
            pCharInfoA->parts.molePositionX != pCharInfoB->parts.molePositionX ||
            pCharInfoA->parts.molePositionY != pCharInfoB->parts.molePositionY)
        {
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_PARTS;
        }
    }

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_NAME)
        if (FFLiCompareString16(pAdditionalInfoA->name, pAdditionalInfoB->name, 10 + 1) != 0)
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_NAME;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_CREATOR_NAME)
        if (FFLiCompareString16(pAdditionalInfoA->creatorName, pAdditionalInfoB->creatorName, 10 + 1) != 0)
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_CREATOR_NAME;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_CREATOR_ID)
        if (!FFLiIsSameMiiID(&pAdditionalInfoA->creatorID, &pAdditionalInfoB->creatorID))
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_CREATOR_ID;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_GENDER)
        if (pAdditionalInfoA->gender != pAdditionalInfoB->gender)
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_GENDER;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_BIRTH_MONTH)
        if (pAdditionalInfoA->birthMonth != pAdditionalInfoB->birthMonth)
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_BIRTH_MONTH;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_BIRTH_DAY)
        if (pAdditionalInfoA->birthDay != pAdditionalInfoB->birthDay)
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_BIRTH_DAY;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_FAVORITE_COLOR)
        if (pAdditionalInfoA->favoriteColor != pAdditionalInfoB->favoriteColor)
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_FAVORITE_COLOR;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_HEIGHT)
        if (pAdditionalInfoA->height != pAdditionalInfoB->height)
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_HEIGHT;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_BUILD)
        if (pAdditionalInfoA->build != pAdditionalInfoB->build)
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_BUILD;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_FACELINE_COLOR)
        if (std::memcmp(&pAdditionalInfoA->facelineColor, &pAdditionalInfoB->facelineColor, sizeof(FFLColor)) != 0)
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_FACELINE_COLOR;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_MII_VERSION)
        if (!CompareMiiVersion(pCharInfoA, pCharInfoB))
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_MII_VERSION;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_COPYABLE)
        if (!CompareCopyable(pCharInfoA, pCharInfoB))
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_COPYABLE;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_NG_WORD)
        if (pAdditionalInfoA->ngWord != pAdditionalInfoB->ngWord)
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_NG_WORD;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_LOCAL_ONLY)
        if (!CompareLocalOnly(pCharInfoA, pCharInfoB))
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_LOCAL_ONLY;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_REGION_MOVE)
        if (!CompareRegionMove(pCharInfoA, pCharInfoB))
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_REGION_MOVE;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_FONT_REGION)
        if (pAdditionalInfoA->fontRegion != pAdditionalInfoB->fontRegion)
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_FONT_REGION;

    if (flagIn & FFLI_COMPARE_CHAR_INFO_FLAG_BIRTH_PLATFORM)
        if (!CompareBirthPlatform(pCharInfoA, pCharInfoB))
            flag |= FFLI_COMPARE_CHAR_INFO_FLAG_BIRTH_PLATFORM;

    if (pFlagOut != NULL)
        *pFlagOut = flag;

    return flag != 0;
}

namespace {

bool VerifyName(const u16* s, s32 size)
{
    for (s32 i = 0; i < size; i++)
    {
        u16 c = s[i];
        if (c == L'\0')
            break;

        if (!FFLiIsValidCharacterForName(c))
            return false;
    }

    return true;
}

bool CompareMiiVersion(const FFLiCharInfo* a, const FFLiCharInfo* b)
{
    return a->miiVersion == b->miiVersion;
}

bool CompareCopyable(const FFLiCharInfo* a, const FFLiCharInfo* b)
{
    return a->copyable == b->copyable;
}

bool CompareLocalOnly(const FFLiCharInfo* a, const FFLiCharInfo* b)
{
    return a->localOnly == b->localOnly;
}

bool CompareRegionMove(const FFLiCharInfo* a, const FFLiCharInfo* b)
{
    return a->regionMove == b->regionMove;
}

bool CompareBirthPlatform(const FFLiCharInfo* a, const FFLiCharInfo* b)
{
    return a->birthPlatform == b->birthPlatform;
}

}
*/

import type Mii from "../../../../external/mii-js/mii";

export function FFLiiGetEyeRotateOffset(type: number) {
  const ROTATE: number[] = [
    3, 4, 4, 4, 3, 4, 4, 4, 3, 4, 4, 4, 4, 3, 3, 4, 4, 4, 3, 3, 4, 3, 4, 3, 3,
    4, 3, 4, 4, 3, 4, 4, 4, 3, 3, 3, 4, 4, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 4, 4, 4, 4, 3, 4, 4, 3, 4, 4, 4, 4,

    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  ];
  return 32 - ROTATE[type];
}

export function FFLiiGetEyebrowRotateOffset(type: number) {
  const ROTATE = [
    6, 6, 5, 7, 6, 7, 6, 7, 4, 7, 6, 8, 5, 5, 6, 6, 7, 7, 6, 6, 5, 6, 7, 5,

    6, 6, 6, 6,
  ];
  return 32 - ROTATE[type];
}

export function FFLiiGetAdjustedMouthH(height: number, type: number) {
  switch (type) {
    case 3:
    case 15:
    case 19:
    case 20:
    case 21:
    case 23:
    case 25:
      if (height < 12) height = 12;
  }
  return height;
}

export function FFLiiGetAdjustedEyeH(height: number, type: number) {
  switch (type) {
    case 14:
    case 26:
      if (height < 12) height = 12;
  }
  return height;
}

export type FFLiCharInfo = {
  /*u32*/ miiVersion: number;
  parts: {
    /*s32*/ faceType: number;
    /*s32*/ facelineColor: number;
    /*s32*/ faceLine: number;
    /*s32*/ faceMakeup: number;
    /*s32*/ hairType: number;
    /*s32*/ hairColor: number;
    /*s32*/ hairDir: number;
    /*s32*/ eyeType: number;
    /*s32*/ eyeColor: number;
    /*s32*/ eyeScale: number;
    /*s32*/ eyeScaleY: number;
    /*s32*/ eyeRotate: number;
    /*s32*/ eyeSpacingX: number;
    /*s32*/ eyePositionY: number;
    /*s32*/ eyebrowType: number;
    /*s32*/ eyebrowColor: number;
    /*s32*/ eyebrowScale: number;
    /*s32*/ eyebrowScaleY: number;
    /*s32*/ eyebrowRotate: number;
    /*s32*/ eyebrowSpacingX: number;
    /*s32*/ eyebrowPositionY: number;
    /*s32*/ noseType: number;
    /*s32*/ noseScale: number;
    /*s32*/ nosePositionY: number;
    /*s32*/ mouthType: number;
    /*s32*/ mouthColor: number;
    /*s32*/ mouthScale: number;
    /*s32*/ mouthScaleY: number;
    /*s32*/ mouthPositionY: number;
    /*s32*/ mustacheType: number;
    /*s32*/ beardType: number;
    /*s32*/ beardColor: number;
    /*s32*/ mustacheScale: number;
    /*s32*/ mustachePositionY: number;
    /*s32*/ glassType: number;
    /*s32*/ glassColor: number;
    /*s32*/ glassScale: number;
    /*s32*/ glassPositionY: number;
    /*s32*/ moleType: number;
    /*s32*/ moleScale: number;
    /*s32*/ molePositionX: number;
    /*s32*/ molePositionY: number;
  };
  /*u32*/ height: number;
  /*u32*/ build: number;
  /*u16*/ name: string;
  /*u16*/ creatorName: string;
  /*FFLGender*/ gender: number;
  /*u32*/ birthMonth: number;
  /*u32*/ birthDay: number;
  /*u32*/ favoriteColor: number;
  /*u8*/ favoriteMii: number;
  /*u8*/ copyable: number;
  /*u8*/ ngWord: number;
  /*u8*/ localOnly: number;
  /*u32*/ regionMove: number;
  /*FFLFontRegion*/ fontRegion: number;
  /*u32*/ pageIndex: number;
  /*u32*/ slotIndex: number;
  /*FFLBirthPlatform*/ birthPlatform: number;
  /*FFLCreateID*/ creatorID: any;
  /*u16*/ _112: number; // Set to zero
  /*u32*/ _114: number; // Set to FFLiMiiDataCore._0_24_27
  /*FFLiAuthorID*/ authorID: any;
};

export enum FFLiOriginPosition {
  FFLI_ORIGIN_POSITION_CENTER = 0,
  FFLI_ORIGIN_POSITION_RIGHT = 1,
  FFLI_ORIGIN_POSITION_LEFT = 2,
}

export const MiiClassToFFLiCharInfo = (mii: Mii): FFLiCharInfo => ({
  _112: mii.unknown1,
  _114: mii.unknown2,
  authorID: mii.systemId,
  birthDay: mii.birthDay,
  birthMonth: mii.birthMonth,
  birthPlatform: mii.deviceOrigin,
  build: mii.build,
  copyable: Number(mii.allowCopying),
  creatorID: mii.systemId,
  creatorName: mii.creatorName,
  favoriteColor: mii.favoriteColor,
  favoriteMii: Number(mii.favorite),
  fontRegion: 0,
  gender: mii.gender,
  height: mii.height,
  localOnly: 0,
  miiVersion: mii.version,
  name: mii.miiName,
  ngWord: 0,
  pageIndex: mii.pageIndex,
  parts: {
    beardColor: mii.facialHairColor,
    beardType: mii.beardType,
    eyebrowColor: mii.eyebrowColor,
    eyebrowPositionY: mii.eyebrowYPosition,
    eyebrowRotate: mii.eyebrowRotation,
    eyebrowScale: mii.eyebrowScale,
    eyebrowScaleY: mii.eyebrowYPosition,
    eyebrowSpacingX: mii.eyebrowSpacing,
    eyebrowType: mii.eyebrowType,
    eyeColor: mii.eyeColor,
    eyePositionY: mii.eyeYPosition,
    eyeRotate: mii.eyeRotation,
    eyeScale: mii.eyeScale,
    eyeScaleY: mii.eyeVerticalStretch,
    eyeSpacingX: mii.eyeSpacing,
    eyeType: mii.eyeType,
    faceLine: mii.wrinklesType,
    facelineColor: mii.skinColor,
    faceMakeup: mii.makeupType,
    faceType: mii.faceType,
    glassColor: mii.glassesColor,
    glassPositionY: mii.glassesYPosition,
    glassScale: mii.glassesScale,
    glassType: mii.glassesType,
    hairColor: mii.hairColor,
    hairDir: Number(mii.flipHair),
    hairType: mii.hairType,
    molePositionX: mii.moleXPosition,
    molePositionY: mii.moleYPosition,
    moleScale: mii.moleScale,
    moleType: Number(mii.moleEnabled),
    mouthColor: mii.mouthColor,
    mouthPositionY: mii.mouthYPosition,
    mouthScale: mii.mouthScale,
    mouthScaleY: mii.mouthHorizontalStretch,
    mouthType: mii.mouthType,
    mustachePositionY: mii.mustacheYPosition,
    mustacheScale: mii.mustacheScale,
    mustacheType: mii.mustacheType,
    nosePositionY: mii.noseYPosition,
    noseScale: mii.noseScale,
    noseType: mii.noseType,
  },
  regionMove: mii.regionLock,
  slotIndex: mii.slotIndex,
});
