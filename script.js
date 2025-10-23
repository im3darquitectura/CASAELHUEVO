(function(){
    var script = {
 "start": "this.init(); this.syncPlaylists([this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA].forEach(function(component) { component.set('visible', false); }) }",
 "overflow": "visible",
 "children": [
  "this.MainViewer",
  "this.Container_807F782A_8E23_A905_41DE_623121285A09",
  "this.Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
  "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
  "this.Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
  "this.Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D"
 ],
 "id": "rootPlayer",
 "paddingLeft": 0,
 "mobileMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "propagateClick": false,
 "buttonToggleFullscreen": "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "vrPolyfillScale": 0.85,
 "verticalAlign": "top",
 "minWidth": 20,
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -172.06,
  "pitch": 0
 },
 "id": "camera_0BC10EF6_127B_F36E_419C_9DD30591A1F4",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_B42024F7_B898_6E03_41C2_70D5E95660EB",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_B40678A5_B898_E606_41E5_EA0AA2F16973",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_16CE350A_1961_409E_41A8_85A2E28E3E11",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_09F2667E_1963_C176_41B0_FC2710AC3317_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_09F2667E_1963_C176_41B0_FC2710AC3317",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_17781502_1963_408E_41A3_FB142A8C0334_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_17781502_1963_408E_41A3_FB142A8C0334",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_16A0AED4_196F_418A_41A8_0219B672173D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_16A0AED4_196F_418A_41A8_0219B672173D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_17F1DA51_196F_408A_419B_6DE96D0AB503",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_99F32A1D_9352_433E_41D7_E8998E82621D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_99F32A1D_9352_433E_41D7_E8998E82621D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18807FDA_125A_51A6_41A1_326B5083F46A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_18807FDA_125A_51A6_41A1_326B5083F46A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18ABA951_1259_BEA5_41AF_4D173689E769_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_18ABA951_1259_BEA5_41AF_4D173689E769",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18A962EC_1259_D362_41A7_C3237E0454C6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_18A962EC_1259_D362_41A7_C3237E0454C6",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 0)",
   "media": "this.panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_camera",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "2. INT PIANO - EGG HOUSE DIA - copia",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B40678A5_B898_E606_41E5_EA0AA2F16973"
  }
 ],
 "thumbnailUrl": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_t.jpg",
 "id": "panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_FCD2A827_F2C8_6960_41E7_B83D7267B94A",
  "this.overlay_E067D04B_F339_F920_41D7_AB431563C610"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 173.54,
  "pitch": 0
 },
 "id": "camera_0AF1EE62_127B_F366_41A3_5D20550BFE8B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0.35,
  "pitch": 0
 },
 "id": "camera_0B452EB4_127B_F3E2_41A1_AC4B56000A9D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -116.59,
  "pitch": 0
 },
 "id": "camera_0A960E9B_127B_F3A6_41AD_75A5938E7ACB",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 114.16,
  "pitch": 0
 },
 "id": "camera_0865DF24_127B_F2E2_4193_521153DD9602",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 107.45,
  "pitch": 0
 },
 "id": "camera_0F8B3E11_127B_F2A2_4181_4524704000A6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
 "gyroscopeVerticalDraggingEnabled": false,
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_rotation"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -67.21,
  "pitch": 0
 },
 "id": "camera_0B989F1A_127B_F2A6_41B0_98C74D4FBC2D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 128.59,
  "pitch": 0
 },
 "id": "camera_0FB99E0C_127B_F2A2_41AB_D85736CF59E3",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -42.52,
  "pitch": 0
 },
 "id": "camera_0B63EEA5_127B_F3E2_41A7_6033A1B20131",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0.32,
  "pitch": 0
 },
 "id": "camera_0A8A8E90_127B_F3A2_41A6_E6B56B7313F9",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -178.88,
  "pitch": 0
 },
 "id": "camera_0FF33DF0_127B_F162_41A7_D70D2D31ED64",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_17781502_1963_408E_41A3_FB142A8C0334_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -46.29,
  "pitch": 0
 },
 "id": "camera_0B335ECE_127B_F3BE_41A2_F09A667489A4",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "0. ESCALERAS- EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B42024F7_B898_6E03_41C2_70D5E95660EB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16CE350A_1961_409E_41A8_85A2E28E3E11"
  }
 ],
 "thumbnailUrl": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_t.jpg",
 "id": "panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_E05B384A_F2D8_6920_41B7_52AEB3F15EC1",
  "this.overlay_E2F10FE2_F2D8_A6E0_41E4_1F9B7A0CB1EA"
 ]
},
{
 "hfov": 360,
 "label": "9. INT OFICINA TITA - EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18ABA951_1259_BEA5_41AF_4D173689E769"
  }
 ],
 "thumbnailUrl": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_t.jpg",
 "id": "panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_07731F5F_126E_B15E_41AF_64EE9B36A988"
 ]
},
{
 "hfov": 360,
 "label": "10. INT hab 2 - EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18ABA951_1259_BEA5_41AF_4D173689E769"
  }
 ],
 "thumbnailUrl": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_t.jpg",
 "id": "panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_00E27FC4_126A_71A2_419B_AD57E5978B91"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 19.68,
  "pitch": 0
 },
 "id": "camera_086E6F1F_127B_F2DE_4165_5B2199811B07",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -13.4,
  "pitch": 0
 },
 "id": "camera_0AC1BE72_127B_F366_418E_30C2E6AA7C0D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -0.31,
  "pitch": 0
 },
 "id": "camera_0BADDF00_127B_F2A2_4198_465DDFFA55C8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 83.6,
  "pitch": 0
 },
 "id": "camera_0FECFDE0_127B_F162_41B2_0473D25012A2",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -50.98,
  "pitch": 0
 },
 "id": "camera_0AD0CE7C_127B_F362_4187_045C4D06C82C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -172.54,
  "pitch": 0
 },
 "id": "camera_0F059DD0_127B_F1A2_41AB_F47200021502",
 "automaticZoomSpeed": 10
},
{
 "rollOverBackgroundColor": "#000000",
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "rollOverFontColor": "#FFFFFF",
 "label": "Media",
 "id": "Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "children": [
  {
   "class": "MenuItem",
   "label": "23. urbanismo - EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "class": "MenuItem",
   "label": "1. INT hall Acceso- EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "class": "MenuItem",
   "label": "2. SALÓN - EL HUEVO",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "class": "MenuItem",
   "label": "2. INT PIANO - EGG HOUSE DIA - copia",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "class": "MenuItem",
   "label": "3.TERRAZA- EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "class": "MenuItem",
   "label": "5. GYM - EGG HOUSE DIA copy",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "class": "MenuItem",
   "label": "11.TERRAZA gym - EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "class": "MenuItem",
   "label": "13. INT OFICINA JUAN  - EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  },
  {
   "class": "MenuItem",
   "label": "14.TERRAZA OFICINA JUAN - EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  },
  {
   "class": "MenuItem",
   "label": "17. sauna - EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  },
  {
   "class": "MenuItem",
   "label": "18. INT COCINA- EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  },
  {
   "class": "MenuItem",
   "label": "22. CASA MAYODOMO- EGG HOUSE DIA copy",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  },
  {
   "class": "MenuItem",
   "label": "0. ESCALERAS- EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 12)"
  },
  {
   "class": "MenuItem",
   "label": "3.b - TERRAZA 2- EGG HOUSE DIA  ",
   "click": "this.mainPlayList.set('selectedIndex', 13)"
  },
  {
   "class": "MenuItem",
   "label": "7. INT MUSIC ROOM - EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  },
  {
   "class": "MenuItem",
   "label": "21. VESTEIER PPAL- EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  },
  {
   "class": "MenuItem",
   "label": "16. INT baño PPAL - EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 16)"
  },
  {
   "class": "MenuItem",
   "label": "9. INT OFICINA TITA - EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  },
  {
   "class": "MenuItem",
   "label": "10B. TERRAZA TITA - EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  },
  {
   "class": "MenuItem",
   "label": "10. INT hab 2 - EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  },
  {
   "class": "MenuItem",
   "label": "12.TERRAZA ppal - EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 20)"
  },
  {
   "class": "MenuItem",
   "label": "6. INT HAB PPAL - EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  },
  {
   "class": "MenuItem",
   "label": "8. INT CORREDOR - EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  },
  {
   "class": "MenuItem",
   "label": "8B.  INT ESQUINA - EGG HOUSE DIA",
   "click": "this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "class": "Menu",
 "opacity": 0.4,
 "fontColor": "#FFFFFF",
 "backgroundColor": "#404040",
 "selectedBackgroundColor": "#202020"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 77.41,
  "pitch": 0
 },
 "id": "camera_0C6F9E1C_127B_F2A2_41AC_FA3C297CE35C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 50.34,
  "pitch": 0
 },
 "id": "camera_0AB4EE8B_127B_F3A6_4197_11EEDD2DDCAA",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "5. GYM - EGG HOUSE DIA copy",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_09F2667E_1963_C176_41B0_FC2710AC3317"
  }
 ],
 "thumbnailUrl": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_t.jpg",
 "id": "panorama_16CE350A_1961_409E_41A8_85A2E28E3E11",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_16CE450A_1961_409E_414C_922645350D58",
  "this.overlay_E52F48CE_F348_6923_41DA_232CE6EA815C"
 ]
},
{
 "duration": 5000,
 "label": "2. EXT 2 - CABA\u00d1A VT1",
 "id": "photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B",
 "thumbnailUrl": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B_t.jpg",
 "width": 1600,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_7A6C466E_714D_DD7A_41CB_FFB743A9431B.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 800
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0.28,
  "pitch": 0
 },
 "id": "camera_0B8F4F0F_127B_F2BE_41B0_44650F5378A5",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 25.02,
  "pitch": 0
 },
 "id": "camera_08715F2E_127B_F2FE_418A_BBCBE67FE477",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_camera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "label": "5. INT 2 - CABA\u00d1A VT1",
 "id": "photo_7394633D_781D_12D6_41A4_A0A677937A18",
 "thumbnailUrl": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18_t.jpg",
 "width": 4000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_7394633D_781D_12D6_41A4_A0A677937A18.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2000
},
{
 "duration": 5000,
 "label": "7. INT 3- CABA\u00d1A VT1",
 "id": "photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C",
 "thumbnailUrl": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C_t.jpg",
 "width": 4000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_7237513C_781D_0ED7_41A7_6C2DD36EDB2C.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2000
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -73.01,
  "pitch": 0
 },
 "id": "camera_0ACDDE67_127B_F36E_41A0_AD645FD924F5",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "8. INT CORREDOR - EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18A962EC_1259_D362_41A7_C3237E0454C6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F"
  }
 ],
 "thumbnailUrl": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_t.jpg",
 "id": "panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_02C89E3E_125A_B2DE_41A8_C42B459CE055",
  "this.overlay_0224056A_1259_F166_4185_46781D3E3361",
  "this.overlay_06F559D5_126F_B1A2_419A_857523B6C397"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -171.7,
  "pitch": 0
 },
 "id": "camera_0FA66E05_127B_F2A2_419B_A17D90F34C47",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 179.55,
  "pitch": 0
 },
 "id": "camera_0B1C9ED8_127B_F3A2_418F_60C623775E87",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "17. sauna - EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C"
  }
 ],
 "thumbnailUrl": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_t.jpg",
 "id": "panorama_16A0AED4_196F_418A_41A8_0219B672173D",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_090A339D_1961_47BA_419E_A9F671E35731"
 ]
},
{
 "hfov": 360,
 "label": "23. urbanismo - EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B42024F7_B898_6E03_41C2_70D5E95660EB"
  }
 ],
 "thumbnailUrl": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_t.jpg",
 "id": "panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_058C2A08_127E_52A2_4164_D5573A3D4A2A"
 ]
},
{
 "hfov": 360,
 "label": "3.b - TERRAZA 2- EGG HOUSE DIA  ",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_17F1DA51_196F_408A_419B_6DE96D0AB503"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_99F32A1D_9352_433E_41D7_E8998E82621D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_09F2667E_1963_C176_41B0_FC2710AC3317"
  }
 ],
 "thumbnailUrl": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_t.jpg",
 "id": "panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_FC18428D_F2C8_7920_41DE_D20457BD1B97",
  "this.overlay_E1B8720A_F338_9923_41E6_CD712C55A80F",
  "this.overlay_E12EA603_F33B_B920_41E6_41F769F149B0",
  "this.overlay_E05389AF_F348_AB60_41C6_510985B0B4CC"
 ]
},
{
 "hfov": 360,
 "label": "10B. TERRAZA TITA - EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17"
  }
 ],
 "thumbnailUrl": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_t.jpg",
 "id": "panorama_18ABA951_1259_BEA5_41AF_4D173689E769",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_02DFF02A_1266_4EE6_41A5_2F19DDED5C2C",
  "this.overlay_01D31227_1269_B2EE_41AD_2DB5959B0152",
  "this.overlay_072D3FA0_126E_51E2_4198_E05D88FCBE7E"
 ]
},
{
 "hfov": 360,
 "label": "3.TERRAZA- EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_17F1DA51_196F_408A_419B_6DE96D0AB503"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B40678A5_B898_E606_41E5_EA0AA2F16973"
  }
 ],
 "thumbnailUrl": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_t.jpg",
 "id": "panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0B5511A6_196F_C389_4197_1313D697C107",
  "this.overlay_0B5521A6_196F_C389_41A5_4390294711ED",
  "this.overlay_E0D2E08E_F34B_9920_41E8_7B7CC1CDEF7C",
  "this.overlay_E0F6739D_F34B_9F20_41A0_744DF0D8F89B"
 ]
},
{
 "hfov": 360,
 "label": "7. INT MUSIC ROOM - EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D"
  }
 ],
 "thumbnailUrl": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_t.jpg",
 "id": "panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_078F76D8_126A_B3A2_4189_05369872378F"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_18A962EC_1259_D362_41A7_C3237E0454C6_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -72.36,
  "pitch": 0
 },
 "id": "camera_0ABE5E86_127B_F3AE_41A7_256561AA9A7E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 162.53,
  "pitch": 0
 },
 "id": "camera_0B4F2EAF_127B_F3FE_4194_F23C13181495",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 138.6,
  "pitch": 0
 },
 "id": "camera_0B27FEC4_127B_F3A2_41AB_2D3998870616",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "22. CASA MAYODOMO- EGG HOUSE DIA copy",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_09F2667E_1963_C176_41B0_FC2710AC3317"
  }
 ],
 "thumbnailUrl": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_t.jpg",
 "id": "panorama_99F32A1D_9352_433E_41D7_E8998E82621D",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_83E54420_935F_C706_41E1_6AA1A0EB4B23"
 ]
},
{
 "hfov": 360,
 "label": "6. INT HAB PPAL - EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18807FDA_125A_51A6_41A1_326B5083F46A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17"
  }
 ],
 "thumbnailUrl": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_t.jpg",
 "id": "panorama_18A962EC_1259_D362_41A7_C3237E0454C6",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_1FB27368_1259_D162_419E_5B7CE33F3598",
  "this.overlay_027BB543_125A_F6A6_41A4_E1D3EC86DDF4",
  "this.overlay_1D3F62EE_125B_F37E_419A_F6956BB4EA8E"
 ]
},
{
 "hfov": 360,
 "label": "16. INT ba\u00f1o PPAL - EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18807FDA_125A_51A6_41A1_326B5083F46A"
  }
 ],
 "thumbnailUrl": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_t.jpg",
 "id": "panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_0559E413_1269_D6A6_41A4_48C9B93F3D17"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 5.68,
  "pitch": -1.51
 },
 "id": "panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_18ABA951_1259_BEA5_41AF_4D173689E769_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 88.63,
  "pitch": 0
 },
 "id": "camera_0BFFFEE7_127B_F36E_4195_A570B6EB0057",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -35.04,
  "pitch": 0
 },
 "id": "camera_0B6C2EA0_127B_F3E2_419B_1A84894EE08D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_camera",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "label": "4. INT 1 - CABA\u00d1A VT1",
 "id": "photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC",
 "thumbnailUrl": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC_t.jpg",
 "width": 4000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_73ECC5F3_781D_1152_41C2_D1268FFECFCC.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2000
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 179.05,
  "pitch": 0
 },
 "id": "camera_0BA3EF05_127B_F2A2_4155_9D632EF491C8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 0, 1)",
   "media": "this.panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 1, 2)",
   "media": "this.panorama_B42024F7_B898_6E03_41C2_70D5E95660EB",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 2, 3)",
   "media": "this.panorama_B40678A5_B898_E606_41E5_EA0AA2F16973",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 3, 4)",
   "media": "this.panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 4, 5)",
   "media": "this.panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 5, 6)",
   "media": "this.panorama_16CE350A_1961_409E_41A8_85A2E28E3E11",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_09F2667E_1963_C176_41B0_FC2710AC3317_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 6, 7)",
   "media": "this.panorama_09F2667E_1963_C176_41B0_FC2710AC3317",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_17781502_1963_408E_41A3_FB142A8C0334_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 7, 8)",
   "media": "this.panorama_17781502_1963_408E_41A3_FB142A8C0334",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 8, 9)",
   "media": "this.panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_16A0AED4_196F_418A_41A8_0219B672173D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 9, 10)",
   "media": "this.panorama_16A0AED4_196F_418A_41A8_0219B672173D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 10, 11)",
   "media": "this.panorama_17F1DA51_196F_408A_419B_6DE96D0AB503",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_99F32A1D_9352_433E_41D7_E8998E82621D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 11, 12)",
   "media": "this.panorama_99F32A1D_9352_433E_41D7_E8998E82621D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 12, 13)",
   "media": "this.panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 13, 14)",
   "media": "this.panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 14, 15)",
   "media": "this.panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18807FDA_125A_51A6_41A1_326B5083F46A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 15, 16)",
   "media": "this.panorama_18807FDA_125A_51A6_41A1_326B5083F46A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 16, 17)",
   "media": "this.panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 17, 18)",
   "media": "this.panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18ABA951_1259_BEA5_41AF_4D173689E769_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 18, 19)",
   "media": "this.panorama_18ABA951_1259_BEA5_41AF_4D173689E769",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 19, 20)",
   "media": "this.panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 20, 21)",
   "media": "this.panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18A962EC_1259_D362_41A7_C3237E0454C6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 21, 22)",
   "media": "this.panorama_18A962EC_1259_D362_41A7_C3237E0454C6",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 22, 23)",
   "media": "this.panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist, 23, 0)",
   "media": "this.panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist"
},
{
 "duration": 5000,
 "label": "1. EXT 1 - CABA\u00d1A VT1",
 "id": "photo_7A1D2634_714C_3CEE_41D0_EA423895C904",
 "thumbnailUrl": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904_t.jpg",
 "width": 160,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_7A1D2634_714C_3CEE_41D0_EA423895C904.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 80
},
{
 "hfov": 360,
 "label": "18. INT COCINA- EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B40678A5_B898_E606_41E5_EA0AA2F16973"
  }
 ],
 "thumbnailUrl": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_t.jpg",
 "id": "panorama_17F1DA51_196F_408A_419B_6DE96D0AB503",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_1680C261_1963_C08A_41A4_CE5C6CF91751",
  "this.overlay_E623F4ED_F338_FAE0_41E9_D7F2995D9E82",
  "this.overlay_E10E0D62_F33F_ABE0_41EE_5292A5B1209E",
  "this.overlay_014E798F_126A_51BE_41B2_1F3C24979353"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 178.76,
  "pitch": 0
 },
 "id": "camera_0AD8DE77_127B_F36E_41AC_3EE664B68A80",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "13. INT OFICINA JUAN  - EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C"
  }
 ],
 "thumbnailUrl": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_t.jpg",
 "id": "panorama_17781502_1963_408E_41A3_FB142A8C0334",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_17786502_1963_408E_41B8_C8CF1767AFA0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_99F32A1D_9352_433E_41D7_E8998E82621D_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 28.83,
  "pitch": 0
 },
 "id": "camera_0FE13DE6_127B_F16E_4194_9BA64A9A6A92",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -130.52,
  "pitch": 0
 },
 "id": "camera_0AA93E81_127B_F3A2_41B0_7791210128D7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 68.5,
  "pitch": 0
 },
 "id": "camera_0FC53DF5_127B_F162_419B_495A4F3D0FD6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 63.25,
  "pitch": 0
 },
 "id": "camera_0F9C6E17_127B_F2AE_4195_3209C5089149",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "11.TERRAZA gym - EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_99F32A1D_9352_433E_41D7_E8998E82621D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16CE350A_1961_409E_41A8_85A2E28E3E11"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194"
  }
 ],
 "thumbnailUrl": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_t.jpg",
 "id": "panorama_09F2667E_1963_C176_41B0_FC2710AC3317",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_09F2767E_1963_C176_41AE_6B2EF2A61039",
  "this.overlay_09F2067E_1963_C176_41AD_05DDD3E77D76",
  "this.overlay_E7FA42CC_F338_9920_41D7_FBFB0BF07E57",
  "this.overlay_E7824B4C_F337_EF27_41E7_168EF1932DB8"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 177.31,
  "pitch": 0
 },
 "id": "camera_0F18CDD5_127B_F1A2_41A7_237AD263BFCF",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_16A0AED4_196F_418A_41A8_0219B672173D_camera",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "8B.  INT ESQUINA - EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_17F1DA51_196F_408A_419B_6DE96D0AB503"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D"
  }
 ],
 "thumbnailUrl": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_t.jpg",
 "id": "panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_06F0C282_1269_D3A6_41AA_8C95E41ADD33",
  "this.overlay_06C4B084_126E_CFA2_419C_31FE1C11726C"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -6.39,
  "pitch": 0
 },
 "id": "camera_0BB9BF0A_127B_F2A6_418D_68F19EF1D0D3",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -172.98,
  "pitch": 0
 },
 "id": "camera_0BD4FEFB_127B_F366_4177_F7B3E17728FB",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 83.1,
  "pitch": 0
 },
 "id": "camera_0A806E95_127B_F3A2_4187_F306BF2E2848",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_camera",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "2. SAL\u00d3N - EL HUEVO",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B42024F7_B898_6E03_41C2_70D5E95660EB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_17F1DA51_196F_408A_419B_6DE96D0AB503"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A"
  }
 ],
 "thumbnailUrl": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_t.jpg",
 "id": "panorama_B40678A5_B898_E606_41E5_EA0AA2F16973",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_B40658A5_B898_E606_41DB_D3F418B22AE1",
  "this.overlay_B40608A5_B898_E606_41E3_0BF91CFB516F",
  "this.overlay_B406E8A5_B898_E606_41E6_7DCBDE2615ED",
  "this.overlay_B406F8A5_B898_E606_41D2_9CAFEA6DD14F"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -99.79,
  "pitch": 0
 },
 "id": "camera_0F0F0DC5_127B_F1A2_4190_D1DAAA01D843",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -179.68,
  "pitch": 0
 },
 "id": "camera_0B06CED3_127B_F3A6_417A_565FF1CD8EA1",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "12.TERRAZA ppal - EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18A962EC_1259_D362_41A7_C3237E0454C6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18ABA951_1259_BEA5_41AF_4D173689E769"
  }
 ],
 "thumbnailUrl": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_t.jpg",
 "id": "panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_03696ED2_1266_D3A6_4192_78ADC10ACE1C",
  "this.overlay_00C4FDD5_126A_D1A2_4192_FAFB2EB91BB4"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -127.14,
  "pitch": 0
 },
 "id": "camera_0B3D4EC9_127B_F3A2_41AE_1985928ADAEC",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "14.TERRAZA OFICINA JUAN - EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16A0AED4_196F_418A_41A8_0219B672173D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_09F2667E_1963_C176_41B0_FC2710AC3317"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_17781502_1963_408E_41A3_FB142A8C0334"
  }
 ],
 "thumbnailUrl": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_t.jpg",
 "id": "panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_864B1D7E_937E_C1FD_41D1_3E09E6315D47",
  "this.overlay_864BFD7E_937E_C1FD_41E2_44C2C5741043",
  "this.overlay_864BCD7E_937E_C1FD_41C5_F06B5447B87C"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0.37,
  "pitch": 0
 },
 "id": "camera_0B58EEB9_127B_F3E2_418D_AC558FDD7A9C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -119.92,
  "pitch": 0
 },
 "id": "camera_0B2E5EBE_127B_F3DF_4171_F1A9AA90FDFF",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -0.31,
  "pitch": 0
 },
 "id": "camera_0BE86EE2_127B_F366_4192_45D0D0E396C0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 145.38,
  "pitch": 0
 },
 "id": "camera_0FD4AE00_127B_F2A2_41AE_7075A3D280F0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -41.4,
  "pitch": 0
 },
 "id": "camera_0BF5EEEC_127B_F362_41A9_0D0A2467E156",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_18807FDA_125A_51A6_41A1_326B5083F46A_camera",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "1. INT hall Acceso- EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B40678A5_B898_E606_41E5_EA0AA2F16973"
  }
 ],
 "thumbnailUrl": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_t.jpg",
 "id": "panorama_B42024F7_B898_6E03_41C2_70D5E95660EB",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_B42074F7_B898_6E03_41BB_375D7C36F289",
  "this.overlay_B42054F7_B898_6E03_41E1_92E3ED2DE380",
  "this.overlay_0AD7DC02_1279_F6A6_419F_0022AAC16270"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0.2,
  "pitch": 0
 },
 "id": "camera_0B797EAA_127B_F3E6_41A9_986C1E29478F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -87.73,
  "pitch": 0
 },
 "id": "camera_0BCB7EF1_127B_F362_41AC_05EC1062D06B",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 174.46,
  "pitch": 0
 },
 "id": "camera_0AC63E6C_127B_F362_41A6_53C7EC748883",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -91.75,
  "pitch": 0
 },
 "id": "camera_0B127EDD_127B_F3A2_41A8_DDAF6EBE79BA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -179.8,
  "pitch": 0
 },
 "id": "camera_0B852F15_127B_F2A2_419D_96B6D78C0D4D",
 "automaticZoomSpeed": 10
},
{
 "duration": 5000,
 "label": "3. EXT 3 - CABA\u00d1A VT1",
 "id": "photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469",
 "thumbnailUrl": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469_t.jpg",
 "width": 1600,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_7B6E1B33_714C_34EA_41CD_F7D6937C7469.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 800
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_09F2667E_1963_C176_41B0_FC2710AC3317_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 100,
  "class": "PanoramaCameraPosition",
  "yaw": -20.91,
  "pitch": 0
 },
 "id": "camera_087BEF29_127B_F2E2_41B2_521937184C32",
 "automaticZoomSpeed": 10
},
{
 "hfov": 360,
 "label": "21. VESTEIER PPAL- EGG HOUSE DIA",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18A962EC_1259_D362_41A7_C3237E0454C6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8"
  }
 ],
 "thumbnailUrl": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_t.jpg",
 "id": "panorama_18807FDA_125A_51A6_41A1_326B5083F46A",
 "cardboardMenu": "this.Menu_0F29FDB5_127B_F1E2_419C_4513F9F23489",
 "pitch": 0,
 "partial": false,
 "hfovMax": 100,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_044F8F2C_126B_D2E2_4191_61EE6E487704",
  "this.overlay_04CCA269_126A_D362_41AD_3C7CBAE8A9A2"
 ]
},
{
 "duration": 5000,
 "label": "6. EXT 4 - CABA\u00d1A VT1",
 "id": "photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6",
 "thumbnailUrl": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6_t.jpg",
 "width": 4000,
 "class": "Photo",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_72EC7BAE_781D_31F2_41AA_65EDC9E63FD6.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2000
},
{
 "class": "ViewerArea",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 14,
 "toolTipBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 9,
 "paddingLeft": 0,
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 14,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "width": "100%",
 "progressBackgroundColorRatios": [
  0
 ],
 "minHeight": 50,
 "toolTipBorderRadius": 1,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "minWidth": 100,
 "playbackBarHeadOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.7,
 "toolTipFontSize": 13,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "shadow": false,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "transitionMode": "blending",
 "toolTipPaddingBottom": 9,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipTextShadowHorizontalLength": 0,
 "toolTipTextShadowVerticalLength": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "paddingRight": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "borderSize": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 1,
 "toolTipShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "paddingTop": 0,
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "paddingBottom": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "overflow": "visible",
 "children": [
  "this.Container_80D3CF90_8E26_E705_41E0_E47025A2C106"
 ],
 "id": "Container_807F782A_8E23_A905_41DE_623121285A09",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "22.545%",
 "borderRadius": 5,
 "right": 25,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "minHeight": 50,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "89%",
 "bottom": "3%",
 "horizontalAlign": "right",
 "minWidth": 265,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "gap": 1,
 "paddingTop": 0,
 "layout": "horizontal",
 "shadow": false,
 "paddingBottom": 0,
 "class": "Container",
 "data": {
  "name": "--Settings Button Set"
 }
},
{
 "overflow": "visible",
 "id": "Container_82CEEC30_9220_D3AB_41D9_A91DB817BCCC",
 "left": "2.14%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "21%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 120,
 "verticalAlign": "top",
 "top": "3.5%",
 "horizontalAlign": "left",
 "minWidth": 300,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "layout": "vertical",
 "height": "25%",
 "shadow": false,
 "paddingBottom": 0,
 "class": "Container",
 "data": {
  "name": "--Stickers Container"
 }
},
{
 "class": "ThumbnailList",
 "id": "ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472",
 "itemLabelFontStyle": "normal",
 "paddingLeft": 15,
 "itemLabelHorizontalAlign": "center",
 "scrollBarWidth": 7,
 "itemMode": "normal",
 "right": "2%",
 "borderRadius": 3,
 "selectedItemBackgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#52B7EF",
 "scrollBarOpacity": 1,
 "minHeight": 1,
 "horizontalAlign": "left",
 "backgroundColorRatios": [
  0
 ],
 "itemLabelFontFamily": "Arial",
 "selectedItemThumbnailShadowBlurRadius": 10,
 "verticalAlign": "top",
 "minWidth": 1,
 "itemThumbnailWidth": 80,
 "itemBorderRadius": 0,
 "itemThumbnailOpacity": 1,
 "selectedItemBorderRadius": 0,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "rollOverItemLabelTextDecoration": "underline",
 "height": "82.127%",
 "itemHorizontalAlign": "center",
 "shadow": false,
 "itemThumbnailBorderRadius": 50,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingRight": 3,
 "selectedItemLabelFontColor": "#FFFFFF",
 "selectedItemBackgroundColor": [],
 "rollOverItemLabelFontWeight": "bold",
 "backgroundOpacity": 0.25,
 "paddingRight": 15,
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontSize": 12,
 "itemLabelTextDecoration": "none",
 "borderSize": 0,
 "itemLabelFontWeight": "normal",
 "selectedItemLabelFontStyle": "italic",
 "propagateClick": false,
 "selectedItemLabelTextDecoration": "underline",
 "top": "3.5%",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 12,
 "playList": "this.ThumbnailList_862E7BE1_9245_D8B3_41CA_4BB70D195472_playlist",
 "selectedItemThumbnailShadow": true,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemBorderSize": 0,
 "scrollBarMargin": 4,
 "selectedItemThumbnailShadowOpacity": 0.73,
 "itemLabelFontColor": "#FFFFFF",
 "backgroundColorDirection": "vertical",
 "itemBackgroundColorDirection": "vertical",
 "paddingTop": 20,
 "layout": "vertical",
 "gap": 10,
 "itemThumbnailHeight": 80,
 "itemLabelGap": 9,
 "rollOverItemLabelFontColor": "#FFFFFF",
 "paddingBottom": 20,
 "itemVerticalAlign": "middle",
 "itemOpacity": 1,
 "selectedItemBackgroundOpacity": 0,
 "itemPaddingBottom": 3,
 "selectedItemLabelFontWeight": "bold",
 "data": {
  "name": "-ThumbnailList"
 },
 "visible": false,
 "itemThumbnailShadow": false,
 "maxWidth": 150
},
{
 "overflow": "visible",
 "children": [
  "this.Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B"
 ],
 "id": "Container_8A3F064F_9747_905B_41D4_9169FB3EB41E",
 "left": "2%",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "37.394%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "propagateClick": false,
 "minHeight": 1,
 "verticalAlign": "bottom",
 "horizontalAlign": "left",
 "bottom": "3%",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "gap": 1,
 "paddingTop": 0,
 "layout": "vertical",
 "height": 92,
 "shadow": false,
 "paddingBottom": 0,
 "class": "Container",
 "data": {
  "name": "-Discover Container"
 }
},
{
 "maxHeight": 265,
 "id": "Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scaleMode": "fit_inside",
 "paddingRight": 0,
 "right": "0.6%",
 "width": "5%",
 "borderRadius": 0,
 "url": "skin/Image_E75D7FB5_F538_3297_41CA_C93BFF557E4D.png",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "top": "0.98%",
 "horizontalAlign": "center",
 "minWidth": 1,
 "paddingTop": 0,
 "height": "5%",
 "shadow": false,
 "paddingBottom": 0,
 "class": "Image",
 "data": {
  "name": "Image21736"
 },
 "maxWidth": 485
},
{
 "transparencyActive": true,
 "maxHeight": 70,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 14,
 "toolTipBorderSize": 0,
 "id": "IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "toolTipPaddingLeft": 14,
 "toolTipPaddingTop": 9,
 "pressedIconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA_pressed.png",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 0,
 "width": "17.48%",
 "toolTipFontStyle": "normal",
 "toolTip": "Full Screen",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "toolTipFontFamily": "Arial",
 "verticalAlign": "middle",
 "toolTipTextShadowOpacity": 1,
 "horizontalAlign": "center",
 "toolTipBorderRadius": 1,
 "toolTipShadowSpread": 0,
 "iconURL": "skin/IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA.png",
 "toolTipBorderColor": "#767676",
 "mode": "toggle",
 "minWidth": 1,
 "toolTipOpacity": 0.7,
 "toolTipFontSize": 13,
 "toolTipBackgroundColor": "#000000",
 "paddingTop": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "height": "76.75%",
 "shadow": false,
 "paddingBottom": 0,
 "toolTipFontColor": "#FFFFFF",
 "toolTipFontWeight": "normal",
 "toolTipTextShadowHorizontalLength": 0,
 "class": "IconButton",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 9,
 "data": {
  "name": "Icon fullscreen"
 },
 "cursor": "hand",
 "maxWidth": 70,
 "toolTipTextShadowVerticalLength": 0
},
{
 "transparencyActive": true,
 "maxHeight": 70,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 14,
 "toolTipBorderSize": 0,
 "id": "IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "toolTipPaddingLeft": 14,
 "toolTipPaddingTop": 9,
 "pressedIconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930_pressed.png",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipShadowOpacity": 0,
 "width": "17.15%",
 "toolTipFontStyle": "normal",
 "toolTip": "Audio On/Off",
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "toolTipFontFamily": "Arial",
 "verticalAlign": "middle",
 "toolTipTextShadowOpacity": 1,
 "horizontalAlign": "center",
 "toolTipBorderRadius": 1,
 "toolTipShadowSpread": 0,
 "iconURL": "skin/IconButton_8105A313_8E22_BF0B_41E1_331C6035A930.png",
 "toolTipBorderColor": "#767676",
 "mode": "toggle",
 "minWidth": 1,
 "toolTipOpacity": 0.7,
 "toolTipFontSize": 13,
 "toolTipBackgroundColor": "#000000",
 "paddingTop": 0,
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "height": "76.75%",
 "shadow": false,
 "paddingBottom": 0,
 "toolTipFontColor": "#FFFFFF",
 "toolTipFontWeight": "normal",
 "toolTipTextShadowHorizontalLength": 0,
 "class": "IconButton",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 9,
 "data": {
  "name": "Icon audio"
 },
 "cursor": "hand",
 "maxWidth": 70,
 "toolTipTextShadowVerticalLength": 0
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 0.16,
   "yaw": -91.37
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_B40678A5_B898_E606_41E5_EA0AA2F16973, this.camera_0BCB7EF1_127B_F362_41AC_05EC1062D06B); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_FCD2A827_F2C8_6960_41E7_B83D7267B94A",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -0.07,
   "yaw": -41.4
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C, this.camera_0BF5EEEC_127B_F362_41A9_0D0A2467E156); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E067D04B_F339_F920_41D7_AB431563C610",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -41.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.07
  }
 ]
},
{
 "transparencyActive": false,
 "maxHeight": 70,
 "id": "IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "17.15%",
 "borderRadius": 0,
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37.png",
 "mode": "push",
 "minWidth": 1,
 "paddingTop": 0,
 "height": "76.75%",
 "shadow": false,
 "paddingBottom": 0,
 "class": "IconButton",
 "data": {
  "name": "IconButton8475"
 },
 "cursor": "hand",
 "maxWidth": 70
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 4.95,
   "yaw": -65.84
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_16CE350A_1961_409E_41A8_85A2E28E3E11, this.camera_086E6F1F_127B_F2DE_4165_5B2199811B07); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E05B384A_F2D8_6920_41B7_52AEB3F15EC1",
 "maps": [
  {
   "hfov": 10.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -65.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.95
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 16.26,
   "yaw": 7.02
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B42024F7_B898_6E03_41C2_70D5E95660EB, this.camera_0B989F1A_127B_F2A6_41B0_98C74D4FBC2D); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E2F10FE2_F2D8_A6E0_41E4_1F9B7A0CB1EA",
 "maps": [
  {
   "hfov": 10.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 16.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 4.78,
   "yaw": -111.5
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18ABA951_1259_BEA5_41AF_4D173689E769, this.camera_0A960E9B_127B_F3A6_41AD_75A5938E7ACB); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_07731F5F_126E_B15E_41AF_64EE9B36A988",
 "maps": [
  {
   "hfov": 10.4,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -111.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 2.23,
   "yaw": 1.12
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18ABA951_1259_BEA5_41AF_4D173689E769, this.camera_0FE13DE6_127B_F16E_4194_9BA64A9A6A92); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_00E27FC4_126A_71A2_419B_AD57E5978B91",
 "maps": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 0.92,
   "yaw": -6.46
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_09F2667E_1963_C176_41B0_FC2710AC3317, this.camera_087BEF29_127B_F2E2_41B2_521937184C32); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_16CE450A_1961_409E_414C_922645350D58",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 2.69,
   "yaw": -160.32
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7, this.camera_0865DF24_127B_F2E2_4193_521153DD9602); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E52F48CE_F348_6923_41DA_232CE6EA815C",
 "maps": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16CE350A_1961_409E_41A8_85A2E28E3E11_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -0.29,
   "yaw": -0.95
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18A962EC_1259_D362_41A7_C3237E0454C6, this.camera_0AD0CE7C_127B_F362_4187_045C4D06C82C); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_02C89E3E_125A_B2DE_41A8_C42B459CE055",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -1.34,
   "yaw": -154.98
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F, this.camera_0AA93E81_127B_F3A2_41B0_7791210128D7); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0224056A_1259_F166_4185_46781D3E3361",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -154.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 0.92,
   "yaw": -179.65
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD, this.camera_0AD8DE77_127B_F36E_41AC_3EE664B68A80); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_06F559D5_126F_B1A2_419A_857523B6C397",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16A0AED4_196F_418A_41A8_0219B672173D_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 0.41,
   "yaw": 80.21
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C, this.camera_0FECFDE0_127B_F162_41B2_0473D25012A2); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_090A339D_1961_47BA_419E_A9F671E35731",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 88,
      "height": 94
     }
    ]
   },
   "pitch": 8.81,
   "yaw": 7.94
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B42024F7_B898_6E03_41C2_70D5E95660EB, this.camera_0B58EEB9_127B_F3E2_418D_AC558FDD7A9C); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_058C2A08_127E_52A2_4164_D5573A3D4A2A",
 "maps": [
  {
   "hfov": 7.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ]
   },
   "pitch": 8.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 115
     }
    ]
   },
   "pitch": 0.59,
   "yaw": 133.71
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C, this.camera_0FB99E0C_127B_F2A2_41AB_D85736CF59E3); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_FC18428D_F2C8_7920_41DE_D20457BD1B97",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 115
     }
    ]
   },
   "pitch": -0.03,
   "yaw": -179.68
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_17F1DA51_196F_408A_419B_6DE96D0AB503, this.camera_0FA66E05_127B_F2A2_419B_A17D90F34C47); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E1B8720A_F338_9923_41E6_CD712C55A80F",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 7.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 86,
      "height": 78
     }
    ]
   },
   "pitch": -9.45,
   "yaw": 80.67
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E12EA603_F33B_B920_41E6_41F769F149B0",
 "maps": [
  {
   "hfov": 7.65,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -9.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -22.2,
   "yaw": 106.99
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_09F2667E_1963_C176_41B0_FC2710AC3317, this.camera_0F8B3E11_127B_F2A2_4181_4524704000A6); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E05389AF_F348_AB60_41C6_510985B0B4CC",
 "maps": [
  {
   "hfov": 9.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 106.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -22.2
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 9.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 20.56,
   "yaw": 166.6
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17, this.camera_0FD4AE00_127B_F2A2_41AE_7075A3D280F0); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_02DFF02A_1266_4EE6_41A5_2F19DDED5C2C",
 "maps": [
  {
   "hfov": 9.78,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 20.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 2.53,
   "yaw": -151.17
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18A83C99_1259_B7A5_41AF_E42BDF0A0A6D, this.camera_0FF33DF0_127B_F162_41A7_D70D2D31ED64); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_01D31227_1269_B2EE_41AD_2DB5959B0152",
 "maps": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -151.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 1.35,
   "yaw": 63.41
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18A8D61A_1259_B2A6_41A8_AA188DBB7CFF, this.camera_0FC53DF5_127B_F162_419B_495A4F3D0FD6); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_072D3FA0_126E_51E2_4198_E05D88FCBE7E",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18ABA951_1259_BEA5_41AF_4D173689E769_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 1.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 0.41,
   "yaw": 179.69
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_B40678A5_B898_E606_41E5_EA0AA2F16973, this.camera_0B06CED3_127B_F3A6_417A_565FF1CD8EA1); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0B5511A6_196F_C389_4197_1313D697C107",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -0.34,
   "yaw": -51.41
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194, this.camera_0B335ECE_127B_F3BE_41A2_F09A667489A4); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0B5521A6_196F_C389_41A5_4390294711ED",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 0.03,
   "yaw": -129.66
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_17F1DA51_196F_408A_419B_6DE96D0AB503, this.camera_0B3D4EC9_127B_F3A2_41AE_1985928ADAEC); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E0D2E08E_F34B_9920_41E8_7B7CC1CDEF7C",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 0.14,
   "yaw": 138.6
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A, this.camera_0B27FEC4_127B_F3A2_41AB_2D3998870616); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E0F6739D_F34B_9F20_41A0_744DF0D8F89B",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 138.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 0.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -3.67,
   "yaw": 49.48
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D, this.camera_08715F2E_127B_F2FE_418A_BBCBE67FE477); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_078F76D8_126A_B3A2_4189_05369872378F",
 "maps": [
  {
   "hfov": 10.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18AB7C4F_125A_56BE_4196_7A616E8BA79F_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_99F32A1D_9352_433E_41D7_E8998E82621D_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 1.42,
   "yaw": -102.59
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_09F2667E_1963_C176_41B0_FC2710AC3317, this.camera_0B2E5EBE_127B_F3DF_4171_F1A9AA90FDFF); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_83E54420_935F_C706_41E1_6AA1A0EB4B23",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -0.96,
   "yaw": 144.96
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18807FDA_125A_51A6_41A1_326B5083F46A, this.camera_0BB9BF0A_127B_F2A6_418D_68F19EF1D0D3); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_1FB27368_1259_D162_419E_5B7CE33F3598",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 144.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -0.96,
   "yaw": 129.02
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D, this.camera_0BA3EF05_127B_F2A2_4155_9D632EF491C8); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_027BB543_125A_F6A6_41A4_E1D3EC86DDF4",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 129.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.96
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -1.84,
   "yaw": -5.54
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17, this.camera_0B8F4F0F_127B_F2BE_41B0_44650F5378A5); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_1D3F62EE_125B_F37E_419A_F6956BB4EA8E",
 "maps": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18A962EC_1259_D362_41A7_C3237E0454C6_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.84
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -1.93,
   "yaw": 137.48
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18807FDA_125A_51A6_41A1_326B5083F46A, this.camera_0B852F15_127B_F2A2_419D_96B6D78C0D4D); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0559E413_1269_D6A6_41A4_48C9B93F3D17",
 "maps": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 137.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 0.92,
   "yaw": 88.25
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_B40678A5_B898_E606_41E5_EA0AA2F16973, this.camera_0A806E95_127B_F3A2_4187_F306BF2E2848); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_1680C261_1963_C08A_41A4_CE5C6CF91751",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -0.1,
   "yaw": 52.86
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C, this.camera_0AB4EE8B_127B_F3A6_4197_11EEDD2DDCAA); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E623F4ED_F338_FAE0_41E9_D7F2995D9E82",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 52.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -0.1,
   "yaw": 8.3
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194, this.camera_0A8A8E90_127B_F3A2_41A6_E6B56B7313F9); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E10E0D62_F33F_ABE0_41EE_5292A5B1209E",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.1
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -0.59,
   "yaw": -17.47
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD, this.camera_0ABE5E86_127B_F3AE_41A7_256561AA9A7E); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_014E798F_126A_51BE_41B2_1F3C24979353",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17F1DA51_196F_408A_419B_6DE96D0AB503_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_17781502_1963_408E_41A3_FB142A8C0334_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 2.42,
   "yaw": -2.69
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C, this.camera_0B797EAA_127B_F3E6_41A9_986C1E29478F); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_17786502_1963_408E_41B8_C8CF1767AFA0",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -7.42,
   "yaw": 7.46
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C, this.camera_0F9C6E17_127B_F2AE_4195_3209C5089149); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_09F2767E_1963_C176_41AE_6B2EF2A61039",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -0.34,
   "yaw": 159.09
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_16CE350A_1961_409E_41A8_85A2E28E3E11, this.camera_0AF1EE62_127B_F366_41A3_5D20550BFE8B); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_09F2067E_1963_C176_41AD_05DDD3E77D76",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -2.06,
   "yaw": 60.08
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_99F32A1D_9352_433E_41D7_E8998E82621D, this.camera_0C6F9E1C_127B_F2A2_41AC_FA3C297CE35C); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E7FA42CC_F338_9920_41D7_FBFB0BF07E57",
 "maps": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 15.41,
   "yaw": -72.55
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_FF3095C6_F2C9_9B20_41C5_4410CA9C7194, this.camera_0ACDDE67_127B_F36E_41A0_AD645FD924F5); this.mainPlayList.set('selectedIndex', 13)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_E7824B4C_F337_EF27_41E7_168EF1932DB8",
 "maps": [
  {
   "hfov": 10.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -72.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_09F2667E_1963_C176_41B0_FC2710AC3317_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 15.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -1.34,
   "yaw": 107.64
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_17F1DA51_196F_408A_419B_6DE96D0AB503, this.camera_0B4F2EAF_127B_F3FE_4194_F23C13181495); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_06F0C282_1269_D3A6_41AA_8C95E41ADD33",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -0.56,
   "yaw": -1.24
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18B4A614_1259_D2A2_41AB_7FA2632FB62D, this.camera_0B452EB4_127B_F3E2_41A1_AC4B56000A9D); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_06C4B084_126E_CFA2_419C_31FE1C11726C",
 "maps": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_004D3613_126B_D2A6_41A1_B8D2A4CE56CD_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.56
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 0.41,
   "yaw": 0.32
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_0B5571A6_196F_C389_417B_ADDCED6DCB9C, this.camera_0BE86EE2_127B_F366_4192_45D0D0E396C0); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B40658A5_B898_E606_41DB_D3F418B22AE1",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 0.16,
   "yaw": 179.69
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_B42024F7_B898_6E03_41C2_70D5E95660EB, this.camera_0B1C9ED8_127B_F3A2_418F_60C623775E87); this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B40608A5_B898_E606_41E3_0BF91CFB516F",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_1_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 1.92,
   "yaw": 92.27
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_FCDD0827_F2C8_6960_41DA_8EB157064D9A, this.camera_0BFFFEE7_127B_F36E_4195_A570B6EB0057); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B406E8A5_B898_E606_41E6_7DCBDE2615ED",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B40678A5_B898_E606_41E5_EA0AA2F16973_1_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 0.67,
   "yaw": -96.9
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_17F1DA51_196F_408A_419B_6DE96D0AB503, this.camera_0B127EDD_127B_F3A2_41A8_DDAF6EBE79BA); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B406F8A5_B898_E606_41D2_9CAFEA6DD14F",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -3.14,
   "yaw": -179.72
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18A962EC_1259_D362_41A7_C3237E0454C6, this.camera_0AC63E6C_127B_F362_41A6_53C7EC748883); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_03696ED2_1266_D3A6_4192_78ADC10ACE1C",
 "maps": [
  {
   "hfov": 10.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.14
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -13.41,
   "yaw": -34.62
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18ABA951_1259_BEA5_41AF_4D173689E769, this.camera_0AC1BE72_127B_F366_418E_30C2E6AA7C0D); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_00C4FDD5_126A_D1A2_4192_FAFB2EB91BB4",
 "maps": [
  {
   "hfov": 10.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -34.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18B4BFC0_1259_B1A2_41AB_F81FE09CCE17_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -13.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 115
     }
    ]
   },
   "pitch": 5.69,
   "yaw": -116.75
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_09F2667E_1963_C176_41B0_FC2710AC3317, this.camera_0F059DD0_127B_F1A2_41AB_F47200021502); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_864B1D7E_937E_C1FD_41D1_3E09E6315D47",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 115
     }
    ]
   },
   "pitch": 2.42,
   "yaw": -179.8
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_17781502_1963_408E_41A3_FB142A8C0334, this.camera_0F18CDD5_127B_F1A2_41A7_237AD263BFCF); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_864BFD7E_937E_C1FD_41E2_44C2C5741043",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_864B3D7E_937E_C1FD_41DE_97C09A0B494C_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 115
     }
    ]
   },
   "pitch": 3.18,
   "yaw": -96.4
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_16A0AED4_196F_418A_41A8_0219B672173D, this.camera_0F0F0DC5_127B_F1A2_4190_D1DAAA01D843); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_864BCD7E_937E_C1FD_41C5_F06B5447B87C",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": 0.37,
   "yaw": -0.45
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_B40678A5_B898_E606_41E5_EA0AA2F16973, this.camera_0BADDF00_127B_F2A2_4198_465DDFFA55C8); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B42074F7_B898_6E03_41BB_375D7C36F289",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -12.61,
   "yaw": 112.79
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "image",
   "click": "this.startPanoramaWithCamera(this.panorama_FF1661F7_F2C9_9AE1_41E1_26DBC5B48AD7, this.camera_0BD4FEFB_127B_F366_4177_F7B3E17728FB); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_B42054F7_B898_6E03_41E1_92E3ED2DE380",
 "maps": []
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -2.52,
   "yaw": -179.63
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_0A67A1AA_127F_B1E6_41A3_0B0B33D51865, this.camera_0BC10EF6_127B_F36E_419C_9DD30591A1F4); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_0AD7DC02_1279_F6A6_419F_0022AAC16270",
 "maps": [
  {
   "hfov": 10.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B42024F7_B898_6E03_41C2_70D5E95660EB_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -5.44,
   "yaw": 173.61
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18A962EC_1259_D362_41A7_C3237E0454C6, this.camera_0B6C2EA0_127B_F3E2_419B_1A84894EE08D); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_044F8F2C_126B_D2E2_4191_61EE6E487704",
 "maps": [
  {
   "hfov": 10.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.44
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "items": [
  {
   "hfov": 10.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 116,
      "height": 114
     }
    ]
   },
   "pitch": -3.08,
   "yaw": 0.2
  }
 ],
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_18B762EE_1259_B37E_419E_5E3B9ED835B8, this.camera_0B63EEA5_127B_F3E2_41A7_6033A1B20131); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_04CCA269_126A_D362_41AD_3C7CBAE8A9A2",
 "maps": [
  {
   "hfov": 10.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_18807FDA_125A_51A6_41A1_326B5083F46A_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.08
  }
 ]
},
{
 "overflow": "visible",
 "children": [
  "this.IconButton_FAA56A93_EB1E_792C_41B3_1467377FDD37",
  "this.IconButton_807BAF04_8E22_670D_41B7_872D69E5EABA",
  "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930"
 ],
 "id": "Container_80D3CF90_8E26_E705_41E0_E47025A2C106",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "75.269%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "right",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "layout": "horizontal",
 "height": "100%",
 "shadow": false,
 "paddingBottom": 0,
 "class": "Container",
 "data": {
  "name": "-Hide buttons"
 }
},
{
 "overflow": "visible",
 "id": "Container_8BEA9761_974D_B047_41DA_8D05A7FEFD9B",
 "backgroundOpacity": 0,
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "paddingRight": 0,
 "width": "100%",
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "propagateClick": false,
 "minHeight": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "horizontalAlign": "left",
 "minWidth": 1,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "layout": "horizontal",
 "height": "55.435%",
 "shadow": false,
 "paddingBottom": 0,
 "class": "Container",
 "data": {
  "name": "Container Content"
 }
}],
 "scripts": {
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getKey": function(key){  return window[key]; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "existsKey": function(key){  return key in window; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); }
 },
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "downloadEnabled": false,
 "paddingTop": 0,
 "layout": "absolute",
 "gap": 10,
 "shadow": false,
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "buttonToggleMute": "this.IconButton_8105A313_8E22_BF0B_41E1_331C6035A930",
 "data": {
  "name": "Player463"
 },
 "class": "Player",
 "desktopMipmappingEnabled": false,
 "height": "100%"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
