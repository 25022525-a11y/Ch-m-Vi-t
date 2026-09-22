# Banh mi v11 Material / UV Production Plan

## Audit snapshot

- Source inspected: `banh_mi_blockout_v10.blend`; scene was saved and clean during audit.
- Scene: 84 objects; `BanhMi_ROOT`, Camera, Light, six ingredient group empties, two bread meshes, 70 ingredient render objects, and one preview ground.
- Asset: 81 objects including the root/groups; 51,480 evaluated triangles from the v10 verification.
- UV state: none of the 74 ingredient/bread meshes has a UV layer or marked seams.
- No Blender data was changed during this audit. No rendering, unwrapping, topology edits, or texture generation was performed.
- There is no tomato object or tomato material in v10.

## Material families and UV policy

| Object / group | Current material(s) | Recommended final family | Sharing policy | UV layout policy |
|---|---|---|---|---|
| `Bread_Top` | `MAT_Bread_Golden`, `MAT_Bread_Score`, `MAT_Bread_Slash` | `Bread_Crust` + `Bread_Crumb` | Share both materials and the bread texture set with `Bread_Bottom` | Unique, non-overlapping islands for the top; highest texel density on hero-facing crust, opening lip, and scores |
| `Bread_Bottom` | same three bread materials; slash slot is unused | `Bread_Crust` + `Bread_Crumb` | Share with `Bread_Top` | Unique, non-overlapping islands in the same bread atlas; lower priority on underside/hidden rear |
| `Meat_Main` / 16 slices | `MAT_Meat_Brown`, `MAT_Meat_Cut` | `Meat` | All slices share one material; brown edge and cut face become regions of one atlas/material | Unwrap one master slice at base-cage level and copy UVs to all identical-topology slices; overlapping UVs are desirable here |
| `Cucumber_Group` / outer rings | `MAT_Cucumber_Green` | `Cucumber_Outer` | All eight outer meshes share | One canonical outer-ring unwrap copied to all eight; overlap instances |
| `Cucumber_Group` / inner discs | `MAT_Cucumber_Inner`, `MAT_Cucumber_Seeds` | `Cucumber_Inner` | All eight inner meshes share; seeds can be encoded in the same material/atlas region | One canonical inner-disc unwrap copied to all eight; overlap instances |
| `Pickled_Carrot_Group` / carrot pieces | `MAT_Pickle_Carrot` | `Pickled_Carrot` | All 13 carrot objects share | One canonical strip/curl layout; reuse/overlap UVs because pieces are small and repetitive |
| `Pickled_Carrot_Group` / daikon pieces | `MAT_Pickle_Daikon` | `Pickled_Daikon` | All five daikon objects share | Reuse the same strip topology layout, assigned to a different atlas region |
| `Cilantro_Group` | `MAT_Cilantro_Green` | `Cilantro` | All 16 leaves share | One master-leaf unwrap copied to all leaves; overlap instances. Reserve alpha only if later silhouette cards replace geometry; current mesh does not need alpha |
| `Chili_Group` | `MAT_Chili_Red` | `Chili` | All four rings share | One cylindrical/ring unwrap copied to all rings; overlap instances |
| `Sauce_Group` | `MAT_Sauce_Cream` on two curves | `Sauce` | Both curves share | Do not unwrap now. Keep curve + simple PBR material through look development; convert only on an export copy if the GLB path requires mesh UVs |

The ten named families above are the authoring-level material families. For the web GLB, target **7 material slots** by keeping `Bread_Crust`, `Bread_Crumb`, `Meat`, `Cilantro`, and `Sauce`, then consolidating `Cucumber_Outer` + `Cucumber_Inner` into one cucumber material and `Pickled_Carrot` + `Pickled_Daikon` + `Chili` into one garnish material. Their visual identities remain separate through atlas regions rather than extra draw-call materials.

## UV readiness

### Ready once seams are defined

- `Bread_Top` and `Bread_Bottom`: closed, clean meshes with applied object transforms. Existing bevel modifiers and shape keys preserve topology. Unwrap the visible v10 form, but keep the bevel modifier unapplied during authoring.
- Meat slices: clean identical base topology (98 vertices / 120 faces each). UV the low-poly cage before subdivision; copy the master UV layer to the other 15 slices.
- Cucumber outer meshes: identical topology (58 / 84), suitable for one shared master UV.
- Cucumber inner meshes: identical topology (121 / 147), suitable for one shared master UV; seed faces should occupy a small shared atlas region.
- Pickled strips/curls: identical topology (40 / 38), suitable for one shared layout with carrot and daikon assigned to separate color regions.
- Chili rings: identical topology (96 / 96), suitable for one shared layout.

### Clean or decide before UV

- No mesh has seams or a UV layer. Create named layer `UV0` consistently.
- Bread currently uses three blockout slots. Before packing, remap `MAT_Bread_Golden` to `Bread_Crust`, and both crumb/score regions to `Bread_Crumb`; confirm visually that no exterior faces are accidentally classified as crumb.
- Bread has `Basis`, `V09_Local_Realism`, and `V10_Geometry_Cleanup` shape keys. UVs are topology-based and can coexist, but the export copy should bake the visible v10 result and remove historical shape keys unless actual morph animation is planned.
- Meat and cilantro also retain historical v09/v10 shape keys. Use the visible v10 shape for checking distortion; bake/remove those keys only in the export copy.
- Meat has level-1 subdivision. UV the base cage first; apply or export the modifier only after checking final triangle budget and tangent shading.
- Most ingredient objects have non-uniform object scale and rotation. Because repeated pieces intentionally share UVs, do not apply transforms to authoring objects merely to unwrap. Apply transforms only after duplicating/joining export meshes, then recheck normals and texture distortion.
- Cilantro is UV-capable, but 16 unique unwraps would be wasteful. Unwrap one master leaf and copy UVs by topology. Its 494-vertex leaf topology is relatively expensive for its screen size; defer any decimation decision until after material preview.

### Wasteful to unwrap now

- `Sauce_Lower` and `Sauce_Upper`: still curves; a flat-color/roughness shader needs no UV. Conversion and UV should happen only if texture detail proves necessary.
- Hidden bread underside and rear hinge: give minimal atlas area; do not chase equal texel density.
- Separate unique layouts for each meat slice, cucumber slice, pickle strip, cilantro leaf, or chili ring would add work and memory without visible benefit.

## Merge and animation policy

Keep these as separate animation nodes under `BanhMi_ROOT`:

- `Bread_Top`
- `Bread_Bottom`
- `Meat_Main`
- `Cucumber_Group`
- `Pickled_Carrot_Group`
- `Cilantro_Group`
- `Chili_Group`
- `Sauce_Group`

On an export copy, safely merge objects **within** each ingredient group after transforms/materials are finalized:

- Merge the 16 meat slices into one `Meat_Main_Mesh`.
- Merge cucumber outer and inner pieces into one `Cucumber_Group_Mesh` while retaining material regions.
- Merge all carrot/daikon pieces into one `Pickled_Carrot_Group_Mesh` while retaining atlas regions.
- Merge the 16 leaves into one `Cilantro_Group_Mesh`.
- Merge the four rings into one `Chili_Group_Mesh`.
- Convert and merge the two sauce curves into one `Sauce_Group_Mesh` only for export.

Do not merge across the eight major hover/exploded-animation nodes. Keep the preview ground, Camera, and Light out of the GLB export collection.

## Web texture budget

- Recommended production budget: two PBR texture sets at **2048 × 2048** maximum.
  - `BanhMi_Bread_2K`: Base Color (sRGB), Normal, and packed ORM/RMA for both bread halves.
  - `BanhMi_Fillings_2K`: Base Color (sRGB), Normal, and packed ORM/RMA for meat, cucumber, pickles, cilantro, chili, and sauce.
- Mobile/lightweight fallback: downscale both sets to **1024 × 1024**.
- Do not use 4K for this asset. Tiny garnishes should receive small atlas regions rather than separate textures.
- Prefer KTX2/BasisU compression in the deployed GLB pipeline; keep PNG/TIFF working sources outside the GLB.

## v11 production sequence

### Phase A — UV

1. Save `banh_mi_blockout_v11.blend`; keep v10 untouched.
2. Create `UV0` on bread and one representative master mesh per repeated topology.
3. Mark bread seams around the opening lip, underside/rear, end caps, and score transitions; unwrap top and bottom into one non-overlapping bread atlas.
4. UV the low-poly meat cage, cucumber outer, cucumber inner, pickle strip, cilantro leaf, and chili ring masters.
5. Copy UV layers to identical-topology siblings; check stretching on the visible v10 shape and hero-facing surfaces.
6. Pack a bread atlas and a fillings atlas with padding suitable for 2K and mipmaps.

### Phase B — Material / shader blockout

1. Create the ten authoring families listed above with Principled BSDF-compatible GLB settings.
2. Replace the three bread blockout slots with crust/crumb assignments and verify opening/score boundaries.
3. Test one shared bread texture set and one shared fillings texture set; keep roughness variation subtle and non-photoreal.
4. Confirm material appearance in Eevee and a GLB viewer before painting detail.

### Phase C — Texture / detail

1. Add low-frequency crust color variation, lighter crumb, and restrained score contrast.
2. Add simple meat browning/cut-face variation and subtle vegetable value/roughness variation.
3. Use normal/roughness detail instead of adding geometry; keep garnish detail readable after mipmapping.
4. Produce 1K derivatives and compare against 2K at intended web camera distance.

### Phase D — Optimization / export

1. Duplicate to an export collection; preserve the authoring hierarchy in the source collection.
2. Bake visible v10 shape-key states on export meshes and remove historical shape keys unless morph animation is required.
3. Apply required modifiers/transforms on export copies, join within each ingredient group, and recalculate/check normals.
4. Consolidate to the seven target GLB materials and remove preview ground, Camera, and Light from export.
5. Export GLB, compress textures with KTX2/BasisU, verify hover/exploded node names, draw calls, triangle count, file size, and visual parity.

## Exact first action for v11

Open v10, save a new `banh_mi_blockout_v11.blend`, then create `UV0` and mark/unwrap seams on **`Bread_Top` and `Bread_Bottom` only** into a shared non-overlapping 2K bread atlas. Check crust/crumb face assignments and UV stretching before touching any filling UVs.
