(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["kaitai-struct/KaitaiStream"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("kaitai-struct/KaitaiStream"));
  } else {
    root.Gen1Wii = factory(root.KaitaiStream);
  }
})(typeof self !== "undefined" ? self : this, function (KaitaiStream) {
  var Gen1Wii = (function () {
    function Gen1Wii(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._read();
    }
    Gen1Wii.prototype._read = function () {
      this.invalid = this._io.readBitsIntBe(1) != 0;
      this.gender = this._io.readBitsIntBe(1) != 0;
      this.birthMonth = this._io.readBitsIntBe(4);
      this.birthDay = this._io.readBitsIntBe(5);
      this.favoriteColor = this._io.readBitsIntBe(4);
      this.favorite = this._io.readBitsIntBe(1) != 0;
      this._io.alignToByte();
      this.miiName = KaitaiStream.bytesToStr(
        this._io.readBytes(20),
        "utf-16be"
      );
      this.bodyHeight = this._io.readU1();
      this.bodyWeight = this._io.readU1();
      this.avatarId = [];
      for (var i = 0; i < 4; i++) {
        this.avatarId.push(this._io.readU1());
      }
      this.clientId = [];
      for (var i = 0; i < 4; i++) {
        this.clientId.push(this._io.readU1());
      }
      this.faceType = this._io.readBitsIntBe(3);
      this.faceColor = this._io.readBitsIntBe(3);
      this.facialFeature = this._io.readBitsIntBe(4);
      this.unknown = this._io.readBitsIntBe(3);
      this.mingle = this._io.readBitsIntBe(1) != 0;
      this.unknown2 = this._io.readBitsIntBe(1) != 0;
      this.downloaded = this._io.readBitsIntBe(1) != 0;
      this.hairType = this._io.readBitsIntBe(7);
      this.hairColor = this._io.readBitsIntBe(3);
      this.hairFlip = this._io.readBitsIntBe(1) != 0;
      this.unknown3 = this._io.readBitsIntBe(5);
      this.eyebrowType = this._io.readBitsIntBe(5);
      this.unknown4 = this._io.readBitsIntBe(1) != 0;
      this.eyebrowRotation = this._io.readBitsIntBe(4);
      this.unknown5 = this._io.readBitsIntBe(6);
      this.eyebrowColor = this._io.readBitsIntBe(3);
      this.eyebrowSize = this._io.readBitsIntBe(4);
      this.eyebrowVertical = this._io.readBitsIntBe(5);
      this.eyebrowHorizontal = this._io.readBitsIntBe(4);
      this.eyeType = this._io.readBitsIntBe(6);
      this.unknown6 = this._io.readBitsIntBe(2);
      this.eyeRotation = this._io.readBitsIntBe(3);
      this.eyeVertical = this._io.readBitsIntBe(5);
      this.eyeColor = this._io.readBitsIntBe(3);
      this.unknown7 = this._io.readBitsIntBe(1) != 0;
      this.eyeSize = this._io.readBitsIntBe(3);
      this.eyeHorizontal = this._io.readBitsIntBe(4);
      this.unknown8 = this._io.readBitsIntBe(5);
      this.noseType = this._io.readBitsIntBe(4);
      this.noseSize = this._io.readBitsIntBe(4);
      this.noseVertical = this._io.readBitsIntBe(5);
      this.unknown9 = this._io.readBitsIntBe(3);
      this.mouthType = this._io.readBitsIntBe(5);
      this.mouthColor = this._io.readBitsIntBe(2);
      this.mouthSize = this._io.readBitsIntBe(4);
      this.mouthVertical = this._io.readBitsIntBe(5);
      this.glassesType = this._io.readBitsIntBe(4);
      this.glassesColor = this._io.readBitsIntBe(3);
      this.unknown10 = this._io.readBitsIntBe(1) != 0;
      this.glassesSize = this._io.readBitsIntBe(3);
      this.glassesVertical = this._io.readBitsIntBe(5);
      this.facialHairMustache = this._io.readBitsIntBe(2);
      this.facialHairBeard = this._io.readBitsIntBe(2);
      this.facialHairColor = this._io.readBitsIntBe(3);
      this.facialHairSize = this._io.readBitsIntBe(4);
      this.facialHairVertical = this._io.readBitsIntBe(5);
      this.moleEnable = this._io.readBitsIntBe(1) != 0;
      this.moleSize = this._io.readBitsIntBe(4);
      this.moleVertical = this._io.readBitsIntBe(5);
      this.moleHorizontal = this._io.readBitsIntBe(5);
      this.unknown11 = this._io.readBitsIntBe(1) != 0;
      this._io.alignToByte();
      this.creatorName = KaitaiStream.bytesToStr(
        this._io.readBytes(20),
        "utf-16be"
      );
    };
    return Gen1Wii;
  })();
  return Gen1Wii;
});
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["kaitai-struct/KaitaiStream"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("kaitai-struct/KaitaiStream"));
  } else {
    root.Gen2Wiiu3dsMiitomo = factory(root.KaitaiStream);
  }
})(typeof self !== "undefined" ? self : this, function (KaitaiStream) {
  var Gen2Wiiu3dsMiitomo = (function () {
    function Gen2Wiiu3dsMiitomo(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._read();
    }
    Gen2Wiiu3dsMiitomo.prototype._read = function () {
      this.unknown1 = this._io.readU1();
      this.characterSet = this._io.readBitsIntBe(2);
      this.regionLock = this._io.readBitsIntBe(2);
      this.profanityFlag = this._io.readBitsIntBe(1) != 0;
      this.copying = this._io.readBitsIntBe(1) != 0;
      this.unknown2 = this._io.readBitsIntBe(2);
      this.miiPositionSlotIndex = this._io.readBitsIntBe(4);
      this.miiPositionPageIndex = this._io.readBitsIntBe(4);
      this.version = this._io.readBitsIntBe(4);
      this.unknown3 = this._io.readBitsIntBe(4);
      this._io.alignToByte();
      this.systemId = [];
      for (var i = 0; i < 8; i++) {
        this.systemId.push(this._io.readU1());
      }
      this.avatarId = [];
      for (var i = 0; i < 4; i++) {
        this.avatarId.push(this._io.readU1());
      }
      this.clientId = [];
      for (var i = 0; i < 6; i++) {
        this.clientId.push(this._io.readU1());
      }
      this.padding = this._io.readU2le();
      this.data1 = this._io.readU2le();
      this.miiName = KaitaiStream.bytesToStr(
        this._io.readBytes(20),
        "utf-16le"
      );
      this.bodyHeight = this._io.readU1();
      this.bodyWeight = this._io.readU1();
      this.faceColor = this._io.readBitsIntBe(3);
      this.faceType = this._io.readBitsIntBe(4);
      this.mingle = this._io.readBitsIntBe(1) != 0;
      this.faceMakeup = this._io.readBitsIntBe(4);
      this.faceWrinkles = this._io.readBitsIntBe(4);
      this._io.alignToByte();
      this.hairType = this._io.readU1();
      this.unknown5 = this._io.readBitsIntBe(4);
      this.hairFlip = this._io.readBitsIntBe(1) != 0;
      this.hairColor = this._io.readBitsIntBe(3);
      this._io.alignToByte();
      this.eye = this._io.readU4le();
      this.eyebrow = this._io.readU4le();
      this.nose = this._io.readU2le();
      this.mouth = this._io.readU2le();
      this.mouth2 = this._io.readU2le();
      this.beard = this._io.readU2le();
      this.glasses = this._io.readU2le();
      this.mole = this._io.readU2le();
      this.creatorName = KaitaiStream.bytesToStr(
        this._io.readBytes(20),
        "utf-16le"
      );
      this.padding2 = this._io.readU2le();
      this.checksum = this._io.readU2le();
    };
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "glassesColor", {
      get: function () {
        if (this._m_glassesColor !== undefined) return this._m_glassesColor;
        this._m_glassesColor = (this.glasses >>> 4) & 7;
        return this._m_glassesColor;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "eyebrowHorizontal", {
      get: function () {
        if (this._m_eyebrowHorizontal !== undefined)
          return this._m_eyebrowHorizontal;
        this._m_eyebrowHorizontal = (this.eyebrow >>> 21) & 15;
        return this._m_eyebrowHorizontal;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "eyeVertical", {
      get: function () {
        if (this._m_eyeVertical !== undefined) return this._m_eyeVertical;
        this._m_eyeVertical = (this.eye >>> 25) & 31;
        return this._m_eyeVertical;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "facialHairBeard", {
      get: function () {
        if (this._m_facialHairBeard !== undefined)
          return this._m_facialHairBeard;
        this._m_facialHairBeard = this.beard & 7;
        return this._m_facialHairBeard;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "mouthSize", {
      get: function () {
        if (this._m_mouthSize !== undefined) return this._m_mouthSize;
        this._m_mouthSize = (this.mouth >>> 9) & 15;
        return this._m_mouthSize;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "eyebrowStretch", {
      get: function () {
        if (this._m_eyebrowStretch !== undefined) return this._m_eyebrowStretch;
        this._m_eyebrowStretch = (this.eyebrow >>> 12) & 7;
        return this._m_eyebrowStretch;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "noseVertical", {
      get: function () {
        if (this._m_noseVertical !== undefined) return this._m_noseVertical;
        this._m_noseVertical = (this.nose >>> 9) & 31;
        return this._m_noseVertical;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "eyeColor", {
      get: function () {
        if (this._m_eyeColor !== undefined) return this._m_eyeColor;
        this._m_eyeColor = (this.eye >>> 6) & 7;
        return this._m_eyeColor;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "birthMonth", {
      get: function () {
        if (this._m_birthMonth !== undefined) return this._m_birthMonth;
        this._m_birthMonth = (this.data1 >>> 1) & 15;
        return this._m_birthMonth;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "mouthColor", {
      get: function () {
        if (this._m_mouthColor !== undefined) return this._m_mouthColor;
        this._m_mouthColor = (this.mouth >>> 6) & 7;
        return this._m_mouthColor;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "moleHorizontal", {
      get: function () {
        if (this._m_moleHorizontal !== undefined) return this._m_moleHorizontal;
        this._m_moleHorizontal = (this.mole >>> 5) & 31;
        return this._m_moleHorizontal;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "facialHairMustache", {
      get: function () {
        if (this._m_facialHairMustache !== undefined)
          return this._m_facialHairMustache;
        this._m_facialHairMustache = (this.mouth2 >>> 5) & 7;
        return this._m_facialHairMustache;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "eyebrowRotation", {
      get: function () {
        if (this._m_eyebrowRotation !== undefined)
          return this._m_eyebrowRotation;
        this._m_eyebrowRotation = (this.eyebrow >>> 16) & 15;
        return this._m_eyebrowRotation;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "moleVertical", {
      get: function () {
        if (this._m_moleVertical !== undefined) return this._m_moleVertical;
        this._m_moleVertical = (this.mole >>> 10) & 31;
        return this._m_moleVertical;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "glassesType", {
      get: function () {
        if (this._m_glassesType !== undefined) return this._m_glassesType;
        this._m_glassesType = this.glasses & 15;
        return this._m_glassesType;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "eyebrowSize", {
      get: function () {
        if (this._m_eyebrowSize !== undefined) return this._m_eyebrowSize;
        this._m_eyebrowSize = (this.eyebrow >>> 8) & 15;
        return this._m_eyebrowSize;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "moleSize", {
      get: function () {
        if (this._m_moleSize !== undefined) return this._m_moleSize;
        this._m_moleSize = (this.mole >>> 1) & 15;
        return this._m_moleSize;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "noseSize", {
      get: function () {
        if (this._m_noseSize !== undefined) return this._m_noseSize;
        this._m_noseSize = (this.nose >>> 5) & 15;
        return this._m_noseSize;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "facialHairVertical", {
      get: function () {
        if (this._m_facialHairVertical !== undefined)
          return this._m_facialHairVertical;
        this._m_facialHairVertical = (this.beard >>> 10) & 31;
        return this._m_facialHairVertical;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "eyeStretch", {
      get: function () {
        if (this._m_eyeStretch !== undefined) return this._m_eyeStretch;
        this._m_eyeStretch = (this.eye >>> 13) & 7;
        return this._m_eyeStretch;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "eyeSize", {
      get: function () {
        if (this._m_eyeSize !== undefined) return this._m_eyeSize;
        this._m_eyeSize = (this.eye >>> 9) & 7;
        return this._m_eyeSize;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "eyeType", {
      get: function () {
        if (this._m_eyeType !== undefined) return this._m_eyeType;
        this._m_eyeType = this.eye & 63;
        return this._m_eyeType;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "eyeHorizontal", {
      get: function () {
        if (this._m_eyeHorizontal !== undefined) return this._m_eyeHorizontal;
        this._m_eyeHorizontal = (this.eye >>> 21) & 15;
        return this._m_eyeHorizontal;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "eyebrowType", {
      get: function () {
        if (this._m_eyebrowType !== undefined) return this._m_eyebrowType;
        this._m_eyebrowType = this.eyebrow & 31;
        return this._m_eyebrowType;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "mouthVertical", {
      get: function () {
        if (this._m_mouthVertical !== undefined) return this._m_mouthVertical;
        this._m_mouthVertical = this.mouth2 & 31;
        return this._m_mouthVertical;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "eyebrowColor", {
      get: function () {
        if (this._m_eyebrowColor !== undefined) return this._m_eyebrowColor;
        this._m_eyebrowColor = (this.eyebrow >>> 5) & 7;
        return this._m_eyebrowColor;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "noseType", {
      get: function () {
        if (this._m_noseType !== undefined) return this._m_noseType;
        this._m_noseType = this.nose & 31;
        return this._m_noseType;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "facialHairColor", {
      get: function () {
        if (this._m_facialHairColor !== undefined)
          return this._m_facialHairColor;
        this._m_facialHairColor = (this.beard >>> 3) & 7;
        return this._m_facialHairColor;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "eyebrowVertical", {
      get: function () {
        if (this._m_eyebrowVertical !== undefined)
          return this._m_eyebrowVertical;
        this._m_eyebrowVertical = (this.eyebrow >>> 25) & 31;
        return this._m_eyebrowVertical;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "glassesSize", {
      get: function () {
        if (this._m_glassesSize !== undefined) return this._m_glassesSize;
        this._m_glassesSize = (this.glasses >>> 7) & 15;
        return this._m_glassesSize;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "eyeRotation", {
      get: function () {
        if (this._m_eyeRotation !== undefined) return this._m_eyeRotation;
        this._m_eyeRotation = (this.eye >>> 16) & 31;
        return this._m_eyeRotation;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "gender", {
      get: function () {
        if (this._m_gender !== undefined) return this._m_gender;
        this._m_gender = this.data1 & 1;
        return this._m_gender;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "birthDay", {
      get: function () {
        if (this._m_birthDay !== undefined) return this._m_birthDay;
        this._m_birthDay = (this.data1 >>> 5) & 31;
        return this._m_birthDay;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "mouthStretch", {
      get: function () {
        if (this._m_mouthStretch !== undefined) return this._m_mouthStretch;
        this._m_mouthStretch = (this.mouth >>> 13) & 7;
        return this._m_mouthStretch;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "moleEnable", {
      get: function () {
        if (this._m_moleEnable !== undefined) return this._m_moleEnable;
        this._m_moleEnable = (this.mole >>> 0) & 1;
        return this._m_moleEnable;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "favorite", {
      get: function () {
        if (this._m_favorite !== undefined) return this._m_favorite;
        this._m_favorite = (this.data1 >>> 14) & 1;
        return this._m_favorite;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "glassesVertical", {
      get: function () {
        if (this._m_glassesVertical !== undefined)
          return this._m_glassesVertical;
        this._m_glassesVertical = (this.glasses >>> 11) & 31;
        return this._m_glassesVertical;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "favoriteColor", {
      get: function () {
        if (this._m_favoriteColor !== undefined) return this._m_favoriteColor;
        this._m_favoriteColor = (this.data1 >>> 10) & 15;
        return this._m_favoriteColor;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "mouthType", {
      get: function () {
        if (this._m_mouthType !== undefined) return this._m_mouthType;
        this._m_mouthType = this.mouth & 63;
        return this._m_mouthType;
      },
    });
    Object.defineProperty(Gen2Wiiu3dsMiitomo.prototype, "facialHairSize", {
      get: function () {
        if (this._m_facialHairSize !== undefined) return this._m_facialHairSize;
        this._m_facialHairSize = (this.beard >>> 6) & 15;
        return this._m_facialHairSize;
      },
    });
    return Gen2Wiiu3dsMiitomo;
  })();
  return Gen2Wiiu3dsMiitomo;
});
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["kaitai-struct/KaitaiStream"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("kaitai-struct/KaitaiStream"));
  } else {
    root.Gen2Wiiu3dsMiitomoNfpstoredataextention = factory(root.KaitaiStream);
  }
})(typeof self !== "undefined" ? self : this, function (KaitaiStream) {
  var Gen2Wiiu3dsMiitomoNfpstoredataextention = (function () {
    function Gen2Wiiu3dsMiitomoNfpstoredataextention(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._read();
    }
    Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype._read = function () {
      this.unknown1 = this._io.readU1();
      this.characterSet = this._io.readBitsIntBe(2);
      this.regionLock = this._io.readBitsIntBe(2);
      this.profanityFlag = this._io.readBitsIntBe(1) != 0;
      this.copying = this._io.readBitsIntBe(1) != 0;
      this.unknown2 = this._io.readBitsIntBe(2);
      this.miiPositionSlotIndex = this._io.readBitsIntBe(4);
      this.miiPositionPageIndex = this._io.readBitsIntBe(4);
      this.version = this._io.readBitsIntBe(4);
      this.unknown3 = this._io.readBitsIntBe(4);
      this._io.alignToByte();
      this.systemId = [];
      for (var i = 0; i < 8; i++) {
        this.systemId.push(this._io.readU1());
      }
      this.avatarId = [];
      for (var i = 0; i < 4; i++) {
        this.avatarId.push(this._io.readU1());
      }
      this.clientId = [];
      for (var i = 0; i < 6; i++) {
        this.clientId.push(this._io.readU1());
      }
      this.padding = this._io.readU2le();
      this.data1 = this._io.readU2le();
      this.miiName = KaitaiStream.bytesToStr(
        this._io.readBytes(20),
        "utf-16le"
      );
      this.bodyHeight = this._io.readU1();
      this.bodyWeight = this._io.readU1();
      this.faceColor = this._io.readBitsIntBe(3);
      this.faceType = this._io.readBitsIntBe(4);
      this.mingle = this._io.readBitsIntBe(1) != 0;
      this.faceMakeup = this._io.readBitsIntBe(4);
      this.faceWrinkles = this._io.readBitsIntBe(4);
      this._io.alignToByte();
      this.hairType = this._io.readU1();
      this.unknown5 = this._io.readBitsIntBe(4);
      this.hairFlip = this._io.readBitsIntBe(1) != 0;
      this.hairColor = this._io.readBitsIntBe(3);
      this._io.alignToByte();
      this.eye = this._io.readU4le();
      this.eyebrow = this._io.readU4le();
      this.nose = this._io.readU2le();
      this.mouth = this._io.readU2le();
      this.mouth2 = this._io.readU2le();
      this.beard = this._io.readU2le();
      this.glasses = this._io.readU2le();
      this.mole = this._io.readU2le();
      this.creatorName = KaitaiStream.bytesToStr(
        this._io.readBytes(20),
        "utf-16le"
      );
      this.padding2 = this._io.readU2le();
      this.checksum = this._io.readU2le();
      this.extFacelineColor = this._io.readU1();
      this.extHairColor = this._io.readU1();
      this.extEyeColor = this._io.readU1();
      this.extEyebrowColor = this._io.readU1();
      this.extMouthColor = this._io.readU1();
      this.extBeardColor = this._io.readU1();
      this.extGlassColor = this._io.readU1();
      this.extGlassType = this._io.readU1();
    };
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "glassesColor",
      {
        get: function () {
          if (this._m_glassesColor !== undefined) return this._m_glassesColor;
          this._m_glassesColor = (this.glasses >>> 4) & 7;
          return this._m_glassesColor;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "eyebrowHorizontal",
      {
        get: function () {
          if (this._m_eyebrowHorizontal !== undefined)
            return this._m_eyebrowHorizontal;
          this._m_eyebrowHorizontal = (this.eyebrow >>> 21) & 15;
          return this._m_eyebrowHorizontal;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "eyeVertical",
      {
        get: function () {
          if (this._m_eyeVertical !== undefined) return this._m_eyeVertical;
          this._m_eyeVertical = (this.eye >>> 25) & 31;
          return this._m_eyeVertical;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "facialHairBeard",
      {
        get: function () {
          if (this._m_facialHairBeard !== undefined)
            return this._m_facialHairBeard;
          this._m_facialHairBeard = this.beard & 7;
          return this._m_facialHairBeard;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "mouthSize",
      {
        get: function () {
          if (this._m_mouthSize !== undefined) return this._m_mouthSize;
          this._m_mouthSize = (this.mouth >>> 9) & 15;
          return this._m_mouthSize;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "eyebrowStretch",
      {
        get: function () {
          if (this._m_eyebrowStretch !== undefined)
            return this._m_eyebrowStretch;
          this._m_eyebrowStretch = (this.eyebrow >>> 12) & 7;
          return this._m_eyebrowStretch;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "noseVertical",
      {
        get: function () {
          if (this._m_noseVertical !== undefined) return this._m_noseVertical;
          this._m_noseVertical = (this.nose >>> 9) & 31;
          return this._m_noseVertical;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "eyeColor",
      {
        get: function () {
          if (this._m_eyeColor !== undefined) return this._m_eyeColor;
          this._m_eyeColor = (this.eye >>> 6) & 7;
          return this._m_eyeColor;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "birthMonth",
      {
        get: function () {
          if (this._m_birthMonth !== undefined) return this._m_birthMonth;
          this._m_birthMonth = (this.data1 >>> 1) & 15;
          return this._m_birthMonth;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "mouthColor",
      {
        get: function () {
          if (this._m_mouthColor !== undefined) return this._m_mouthColor;
          this._m_mouthColor = (this.mouth >>> 6) & 7;
          return this._m_mouthColor;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "moleHorizontal",
      {
        get: function () {
          if (this._m_moleHorizontal !== undefined)
            return this._m_moleHorizontal;
          this._m_moleHorizontal = (this.mole >>> 5) & 31;
          return this._m_moleHorizontal;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "facialHairMustache",
      {
        get: function () {
          if (this._m_facialHairMustache !== undefined)
            return this._m_facialHairMustache;
          this._m_facialHairMustache = (this.mouth2 >>> 5) & 7;
          return this._m_facialHairMustache;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "eyebrowRotation",
      {
        get: function () {
          if (this._m_eyebrowRotation !== undefined)
            return this._m_eyebrowRotation;
          this._m_eyebrowRotation = (this.eyebrow >>> 16) & 15;
          return this._m_eyebrowRotation;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "moleVertical",
      {
        get: function () {
          if (this._m_moleVertical !== undefined) return this._m_moleVertical;
          this._m_moleVertical = (this.mole >>> 10) & 31;
          return this._m_moleVertical;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "glassesType",
      {
        get: function () {
          if (this._m_glassesType !== undefined) return this._m_glassesType;
          this._m_glassesType = this.glasses & 15;
          return this._m_glassesType;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "eyebrowSize",
      {
        get: function () {
          if (this._m_eyebrowSize !== undefined) return this._m_eyebrowSize;
          this._m_eyebrowSize = (this.eyebrow >>> 8) & 15;
          return this._m_eyebrowSize;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "moleSize",
      {
        get: function () {
          if (this._m_moleSize !== undefined) return this._m_moleSize;
          this._m_moleSize = (this.mole >>> 1) & 15;
          return this._m_moleSize;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "noseSize",
      {
        get: function () {
          if (this._m_noseSize !== undefined) return this._m_noseSize;
          this._m_noseSize = (this.nose >>> 5) & 15;
          return this._m_noseSize;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "facialHairVertical",
      {
        get: function () {
          if (this._m_facialHairVertical !== undefined)
            return this._m_facialHairVertical;
          this._m_facialHairVertical = (this.beard >>> 10) & 31;
          return this._m_facialHairVertical;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "eyeStretch",
      {
        get: function () {
          if (this._m_eyeStretch !== undefined) return this._m_eyeStretch;
          this._m_eyeStretch = (this.eye >>> 13) & 7;
          return this._m_eyeStretch;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "eyeSize",
      {
        get: function () {
          if (this._m_eyeSize !== undefined) return this._m_eyeSize;
          this._m_eyeSize = (this.eye >>> 9) & 7;
          return this._m_eyeSize;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "eyeType",
      {
        get: function () {
          if (this._m_eyeType !== undefined) return this._m_eyeType;
          this._m_eyeType = this.eye & 63;
          return this._m_eyeType;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "eyeHorizontal",
      {
        get: function () {
          if (this._m_eyeHorizontal !== undefined) return this._m_eyeHorizontal;
          this._m_eyeHorizontal = (this.eye >>> 21) & 15;
          return this._m_eyeHorizontal;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "eyebrowType",
      {
        get: function () {
          if (this._m_eyebrowType !== undefined) return this._m_eyebrowType;
          this._m_eyebrowType = this.eyebrow & 31;
          return this._m_eyebrowType;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "mouthVertical",
      {
        get: function () {
          if (this._m_mouthVertical !== undefined) return this._m_mouthVertical;
          this._m_mouthVertical = this.mouth2 & 31;
          return this._m_mouthVertical;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "eyebrowColor",
      {
        get: function () {
          if (this._m_eyebrowColor !== undefined) return this._m_eyebrowColor;
          this._m_eyebrowColor = (this.eyebrow >>> 5) & 7;
          return this._m_eyebrowColor;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "noseType",
      {
        get: function () {
          if (this._m_noseType !== undefined) return this._m_noseType;
          this._m_noseType = this.nose & 31;
          return this._m_noseType;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "facialHairColor",
      {
        get: function () {
          if (this._m_facialHairColor !== undefined)
            return this._m_facialHairColor;
          this._m_facialHairColor = (this.beard >>> 3) & 7;
          return this._m_facialHairColor;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "eyebrowVertical",
      {
        get: function () {
          if (this._m_eyebrowVertical !== undefined)
            return this._m_eyebrowVertical;
          this._m_eyebrowVertical = (this.eyebrow >>> 25) & 31;
          return this._m_eyebrowVertical;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "glassesSize",
      {
        get: function () {
          if (this._m_glassesSize !== undefined) return this._m_glassesSize;
          this._m_glassesSize = (this.glasses >>> 7) & 15;
          return this._m_glassesSize;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "eyeRotation",
      {
        get: function () {
          if (this._m_eyeRotation !== undefined) return this._m_eyeRotation;
          this._m_eyeRotation = (this.eye >>> 16) & 31;
          return this._m_eyeRotation;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "gender",
      {
        get: function () {
          if (this._m_gender !== undefined) return this._m_gender;
          this._m_gender = this.data1 & 1;
          return this._m_gender;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "birthDay",
      {
        get: function () {
          if (this._m_birthDay !== undefined) return this._m_birthDay;
          this._m_birthDay = (this.data1 >>> 5) & 31;
          return this._m_birthDay;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "mouthStretch",
      {
        get: function () {
          if (this._m_mouthStretch !== undefined) return this._m_mouthStretch;
          this._m_mouthStretch = (this.mouth >>> 13) & 7;
          return this._m_mouthStretch;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "moleEnable",
      {
        get: function () {
          if (this._m_moleEnable !== undefined) return this._m_moleEnable;
          this._m_moleEnable = (this.mole >>> 0) & 1;
          return this._m_moleEnable;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "favorite",
      {
        get: function () {
          if (this._m_favorite !== undefined) return this._m_favorite;
          this._m_favorite = (this.data1 >>> 14) & 1;
          return this._m_favorite;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "glassesVertical",
      {
        get: function () {
          if (this._m_glassesVertical !== undefined)
            return this._m_glassesVertical;
          this._m_glassesVertical = (this.glasses >>> 11) & 31;
          return this._m_glassesVertical;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "favoriteColor",
      {
        get: function () {
          if (this._m_favoriteColor !== undefined) return this._m_favoriteColor;
          this._m_favoriteColor = (this.data1 >>> 10) & 15;
          return this._m_favoriteColor;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "mouthType",
      {
        get: function () {
          if (this._m_mouthType !== undefined) return this._m_mouthType;
          this._m_mouthType = this.mouth & 63;
          return this._m_mouthType;
        },
      }
    );
    Object.defineProperty(
      Gen2Wiiu3dsMiitomoNfpstoredataextention.prototype,
      "facialHairSize",
      {
        get: function () {
          if (this._m_facialHairSize !== undefined)
            return this._m_facialHairSize;
          this._m_facialHairSize = (this.beard >>> 6) & 15;
          return this._m_facialHairSize;
        },
      }
    );
    return Gen2Wiiu3dsMiitomoNfpstoredataextention;
  })();
  return Gen2Wiiu3dsMiitomoNfpstoredataextention;
});
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["kaitai-struct/KaitaiStream"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("kaitai-struct/KaitaiStream"));
  } else {
    root.Gen3Studio = factory(root.KaitaiStream);
  }
})(typeof self !== "undefined" ? self : this, function (KaitaiStream) {
  var Gen3Studio = (function () {
    function Gen3Studio(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._read();
    }
    Gen3Studio.prototype._read = function () {
      this.facialHairColor = this._io.readU1();
      this.beardGoatee = this._io.readU1();
      this.bodyWeight = this._io.readU1();
      this.eyeStretch = this._io.readU1();
      this.eyeColor = this._io.readU1();
      this.eyeRotation = this._io.readU1();
      this.eyeSize = this._io.readU1();
      this.eyeType = this._io.readU1();
      this.eyeHorizontal = this._io.readU1();
      this.eyeVertical = this._io.readU1();
      this.eyebrowStretch = this._io.readU1();
      this.eyebrowColor = this._io.readU1();
      this.eyebrowRotation = this._io.readU1();
      this.eyebrowSize = this._io.readU1();
      this.eyebrowType = this._io.readU1();
      this.eyebrowHorizontal = this._io.readU1();
      this.eyebrowVertical = this._io.readU1();
      this.faceColor = this._io.readU1();
      this.faceMakeup = this._io.readU1();
      this.faceType = this._io.readU1();
      this.faceWrinkles = this._io.readU1();
      this.favoriteColor = this._io.readU1();
      this.gender = this._io.readU1();
      this.glassesColor = this._io.readU1();
      this.glassesSize = this._io.readU1();
      this.glassesType = this._io.readU1();
      this.glassesVertical = this._io.readU1();
      this.hairColor = this._io.readU1();
      this.hairFlip = this._io.readU1();
      this.hairType = this._io.readU1();
      this.bodyHeight = this._io.readU1();
      this.moleSize = this._io.readU1();
      this.moleEnable = this._io.readU1();
      this.moleHorizontal = this._io.readU1();
      this.moleVertical = this._io.readU1();
      this.mouthStretch = this._io.readU1();
      this.mouthColor = this._io.readU1();
      this.mouthSize = this._io.readU1();
      this.mouthType = this._io.readU1();
      this.mouthVertical = this._io.readU1();
      this.beardSize = this._io.readU1();
      this.beardMustache = this._io.readU1();
      this.beardVertical = this._io.readU1();
      this.noseSize = this._io.readU1();
      this.noseType = this._io.readU1();
      this.noseVertical = this._io.readU1();
    };
    return Gen3Studio;
  })();
  return Gen3Studio;
});
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["kaitai-struct/KaitaiStream"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("kaitai-struct/KaitaiStream"));
  } else {
    root.Gen3Switch = factory(root.KaitaiStream);
  }
})(typeof self !== "undefined" ? self : this, function (KaitaiStream) {
  var Gen3Switch = (function () {
    function Gen3Switch(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._read();
    }
    Gen3Switch.prototype._read = function () {
      this.hairType = this._io.readU1();
      this.moleEnable = this._io.readBitsIntBe(1) != 0;
      this.bodyHeight = this._io.readBitsIntBe(7);
      this.hairFlip = this._io.readBitsIntBe(1) != 0;
      this.bodyWeight = this._io.readBitsIntBe(7);
      this._io.alignToByte();
      this.hairColor = this._io.readU1();
      this.gender = this._io.readBitsIntBe(1) != 0;
      this.eyeColor = this._io.readBitsIntBe(7);
      this._io.alignToByte();
      this.eyebrowColor = this._io.readU1();
      this.mouthColor = this._io.readU1();
      this.facialHairColor = this._io.readU1();
      this.glassesColor = this._io.readU1();
      this.eyeType = this._io.readU1();
      this.mouthType = this._io.readU1();
      this.glassesSize = this._io.readBitsIntBe(3);
      this.eyeVertical = this._io.readBitsIntBe(5);
      this.facialHairMustache = this._io.readBitsIntBe(3);
      this.eyebrowType = this._io.readBitsIntBe(5);
      this.facialHairBeard = this._io.readBitsIntBe(3);
      this.noseType = this._io.readBitsIntBe(5);
      this.mouthStretch = this._io.readBitsIntBe(3);
      this.noseVertical = this._io.readBitsIntBe(5);
      this.eyebrowStretch = this._io.readBitsIntBe(3);
      this.mouthVertical = this._io.readBitsIntBe(5);
      this.eyeRotation = this._io.readBitsIntBe(3);
      this.facialHairVertical = this._io.readBitsIntBe(5);
      this.eyeStretch = this._io.readBitsIntBe(3);
      this.glassesVertical = this._io.readBitsIntBe(5);
      this.eyeSize = this._io.readBitsIntBe(3);
      this.moleHorizontal = this._io.readBitsIntBe(5);
      this._io.alignToByte();
      this.moleVertical = this._io.readU1();
      this.glassesType = this._io.readU1();
      this.faceType = this._io.readBitsIntBe(4);
      this.favoriteColor = this._io.readBitsIntBe(4);
      this.faceWrinkles = this._io.readBitsIntBe(4);
      this.faceColor = this._io.readBitsIntBe(4);
      this.eyeHorizontal = this._io.readBitsIntBe(4);
      this.faceMakeup = this._io.readBitsIntBe(4);
      this.eyebrowRotation = this._io.readBitsIntBe(4);
      this.eyebrowSize = this._io.readBitsIntBe(4);
      this.eyebrowVertical = this._io.readBitsIntBe(4);
      this.eyebrowHorizontal = this._io.readBitsIntBe(4);
      this.mouthSize = this._io.readBitsIntBe(4);
      this.noseSize = this._io.readBitsIntBe(4);
      this.moleSize = this._io.readBitsIntBe(4);
      this.facialHairSize = this._io.readBitsIntBe(4);
      this._io.alignToByte();
      this.miiName = KaitaiStream.bytesToStr(
        this._io.readBytes(20),
        "utf-16le"
      );
      this.unknown = [];
      for (var i = 0; i < 16; i++) {
        this.unknown.push(this._io.readU1());
      }
      this.miiId = [];
      for (var i = 0; i < 4; i++) {
        this.miiId.push(this._io.readU1());
      }
    };
    return Gen3Switch;
  })();
  return Gen3Switch;
});
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["kaitai-struct/KaitaiStream"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("kaitai-struct/KaitaiStream"));
  } else {
    root.Gen3Switchgame = factory(root.KaitaiStream);
  }
})(typeof self !== "undefined" ? self : this, function (KaitaiStream) {
  var Gen3Switchgame = (function () {
    function Gen3Switchgame(_io, _parent, _root) {
      this._io = _io;
      this._parent = _parent;
      this._root = _root || this;
      this._read();
    }
    Gen3Switchgame.prototype._read = function () {
      this.unknownData = [];
      for (var i = 0; i < 16; i++) {
        this.unknownData.push(this._io.readU1());
      }
      this.miiName = KaitaiStream.bytesToStr(
        this._io.readBytes(20),
        "utf-16le"
      );
      this.unknownBuffer = [];
      for (var i = 0; i < 3; i++) {
        this.unknownBuffer.push(this._io.readU1());
      }
      this.favoriteColor = this._io.readU1();
      this.gender = this._io.readU1();
      this.bodyHeight = this._io.readU1();
      this.bodyWeight = this._io.readU1();
      this.unknownBuffer2 = [];
      for (var i = 0; i < 2; i++) {
        this.unknownBuffer2.push(this._io.readU1());
      }
      this.faceType = this._io.readU1();
      this.faceColor = this._io.readU1();
      this.faceWrinkles = this._io.readU1();
      this.faceMakeup = this._io.readU1();
      this.hairType = this._io.readU1();
      this.hairColor = this._io.readU1();
      this.hairFlip = this._io.readU1();
      this.eyeType = this._io.readU1();
      this.eyeColor = this._io.readU1();
      this.eyeSize = this._io.readU1();
      this.eyeStretch = this._io.readU1();
      this.eyeRotation = this._io.readU1();
      this.eyeHorizontal = this._io.readU1();
      this.eyeVertical = this._io.readU1();
      this.eyebrowType = this._io.readU1();
      this.eyebrowColor = this._io.readU1();
      this.eyebrowSize = this._io.readU1();
      this.eyebrowStretch = this._io.readU1();
      this.eyebrowRotation = this._io.readU1();
      this.eyebrowHorizontal = this._io.readU1();
      this.eyebrowVertical = this._io.readU1();
      this.noseType = this._io.readU1();
      this.noseSize = this._io.readU1();
      this.noseVertical = this._io.readU1();
      this.mouthType = this._io.readU1();
      this.mouthColor = this._io.readU1();
      this.mouthSize = this._io.readU1();
      this.mouthStretch = this._io.readU1();
      this.mouthVertical = this._io.readU1();
      this.facialHairColor = this._io.readU1();
      this.facialHairBeard = this._io.readU1();
      this.facialHairMustache = this._io.readU1();
      this.facialHairSize = this._io.readU1();
      this.facialHairVertical = this._io.readU1();
      this.glassesType = this._io.readU1();
      this.glassesColor = this._io.readU1();
      this.glassesSize = this._io.readU1();
      this.glassesVertical = this._io.readU1();
      this.moleEnable = this._io.readU1();
      this.moleSize = this._io.readU1();
      this.moleHorizontal = this._io.readU1();
      this.moleVertical = this._io.readU1();
      this.unknownBuffer3 = [];
      for (var i = 0; i < 1; i++) {
        this.unknownBuffer3.push(this._io.readU1());
      }
    };
    return Gen3Switchgame;
  })();
  return Gen3Switchgame;
});
