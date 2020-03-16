import aw1 from '@mmstudio/aw000001';

export default function set(mm: aw1, key: string, val: unknown) {
	const local = mm.data.local as { [key: string]: unknown };
	local[key] = val;
}
