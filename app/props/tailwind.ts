import { Colors as _Colors } from "../constants/colors";
import { NestedKeysWithPrefix } from "../types/nestedKeys";

type Colors = NestedKeysWithPrefix<_Colors, "-">;
type _WithColors = { default?: Colors, hover?: Colors, focus?: Colors }
type WithColors = _WithColors & { dark?: _WithColors }

type Rounded  = 'none'|'sm'|'md'|'lg'|'xl'|'2xl'|'3xl'|'full';
type Shadow = 'none'|'sm'|'md'|'lg'|'xl'|'2xl'|'inner';
type ScreenSize = 'sm'|'md'|'lg'|'xl'|'2xl'|'3xl'|'4xl'|'5xl'|'6xl'|'7xl';

export type { WithColors, Rounded, ScreenSize, Shadow };