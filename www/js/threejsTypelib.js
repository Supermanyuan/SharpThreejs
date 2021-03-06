﻿/* global Bridge */

"use strict";

Bridge.define('THREE.BlendingSourceType', {
    statics: {
        zeroFactor: 200,
        oneFactor: 201,
        srcColorFactor: 202,
        oneMinusSrcColorFactor: 203,
        srcAlphaFactor: 204,
        oneMinusSrcAlphaFactor: 205,
        dstAlphaFactor: 206,
        oneMinusDstAlphaFactor: 207,
        dstColorFactor: 208,
        oneMinusDstColorFactor: 209,
        srcAlphaSaturateFactor: 210
    },
    enum: true
});

Bridge.define('THREE.BlendingType', {
    statics: {
        noBlending: 0,
        normalBlending: 1,
        additiveBlending: 2,
        subtractiveBlending: 3,
        multiplyBlending: 4,
        customBlending: 5
    },
    enum: true
});

Bridge.define('THREE.EquationType', {
    statics: {
        addEquation: 100,
        subtractEquation: 101,
        reverseSubtractEquation: 102,
        minEquation: 103,
        maxEquation: 104
    },
    enum: true
});

Bridge.define('THREE.MappingMode', {
    statics: {
        uVMapping: 300,
        cubeReflectionMapping: 301,
        cubeRefractionMapping: 302,
        equirectangularReflectionMapping: 303,
        equirectangularRefractionMapping: 304,
        sphericalReflectionMapping: 305
    },
    enum: true
});

/** @namespace THREE */

/**
 * Default is THREE.PCFShadowMap.
 *
 * @public
 * @class THREE.MapType
 */
Bridge.define('THREE.MapType', {
    statics: {
        basicShadowMap: 0,
        pCFShadowMap: 1,
        pCFSoftShadowMap: 2
    },
    enum: true
});

/**
 * Default is THREE.SmoothShading.
 *
 * @public
 * @class THREE.ShadingType
 */
Bridge.define('THREE.ShadingType', {
    statics: {
        flatShading: 0,
        smoothShading: 1
    },
    enum: true
});

Bridge.define('THREE.SideType', {
    statics: {
        frontSide: 0,
        backSide: 1,
        doubleSide: 2
    },
    enum: true
});

/**
 * // Wrapping modes
 *
 * @public
 * @class THREE.WrapType
 */
Bridge.define('THREE.WrapType', {
    statics: {
        repeatWrapping: 1000,
        clampToEdgeWrapping: 1001,
        mirroredRepeatWrapping: 1002
    },
    enum: true
});

Bridge.init();