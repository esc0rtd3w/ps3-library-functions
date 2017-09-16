/*
   Memory Map PS3 DEX While Browser Is Running
*/


// Memory Locations
// unk_vsh_data = unknown data
// unk_vsh_invalid = invalid data (all FF's)
// unk_vsh_empty = unallocated area (all DD's)
var fullmem_v481D = [

	{ comment: 'unk_vsh_invalid_00719C20', memsize: '0x000013CB', start: '0x00719C20', stop: '0x0071AFEB' },
	{ comment: 'unk_vsh_data_00719BEC', memsize: '0x00000033', start: '0x00719BEC', stop: '0x00719C1F' },
	{ comment: 'unk_vsh_data_00718668', memsize: '0x00001184', start: '0x00718668', stop: '0x007197EC' },
	{ comment: 'unk_vsh_data_00718388', memsize: '0x000002DF', start: '0x00718388', stop: '0x00718667' },
	{ comment: 'vsh_elf', memsize: '0x00708387', start: '0x00010000', stop: '0x00718387' },
	{ comment: 'unk_vsh_data_00000000', memsize: '0x0000FFFF', start: '0x00000000', stop: '0x0000FFFF' }


]


// IDPS Locations
var idps_v481D = [

	{ memsize: '0x10', start: '0x00735F98', stop: '0x00735FA7' }

]



// Module Segments Info .data

// Flags
// 0x400005: PPU (EXEC|READ) SPU (READ)
// 0x400007: PPU (EXEC|WRITE|READ) SPU (READ)
// 0x600006: PPU (WRITE|READ) SPU (WRITE|READ)
var segments_data_v481D = [
	{ name: 'basic_plugins_module', memsize: '0x619C', filesize: '0x2714', start: '0xAD0000', end: '0xAD619C', flags: '0x600006', alignment: '16' },
	{ name: 'cat_setting_plugin_module', memsize: '0x79C', filesize: '0x734', start: '0x11D0000', end: '0x11D079C', flags: '0x600006', alignment: '16' },
	{ name: 'cell_libac3dec_lib', memsize: '0x150', filesize: '0x144', start: '0x900000', end: '0x900150', flags: '0x600006', alignment: '16' },
	{ name: 'cellAdec_Library', memsize: '0x3F0', filesize: '0x3EC', start: '0x8B0000', end: '0x8B03F0', flags: '0x600006', alignment: '16' },
	{ name: 'cellAsfParser2_Library', memsize: '0x970', filesize: '0x964', start: '0xF90000', end: '0xF90970', flags: '0x600006', alignment: '16' },
	{ name: 'cellAtrac_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellAtrac3dec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellAtracXdec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellDmux_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellDmuxPamf_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellGifDec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellJpgDec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellM4AacDec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellMP3dec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellMtp_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellPamf_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellSre_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellTiffDec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'custom_render_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'eseidle_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'explore_plugin_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'fs_utililty_full', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'libavcdec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'libsmvd4_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'libvdec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'mms_db_full_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'mms_ext_full_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'mms_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'msmw1_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'msmw2_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'paf_ext_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'paf_web_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'qgl_base_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'sacd_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'silk_base_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'silk_e_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'silk_e_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'silk_npflashplayer9_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'silk_webkit_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'silk_wk_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'soundvisualizer_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'sys_audio_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'vshmain_ext_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'webrender_plugin_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_amgsdk_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_mdimp1_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_mdimp2_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_mdimp3_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_mdimp4_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_mdimp6_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_mdimp8_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_mdimp9_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'xmb_plugin_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' }
];


// Module Segments Info .text

// Flags
// 0x400005: PPU (EXEC|READ) SPU (READ)
// 0x400007: PPU (EXEC|WRITE|READ) SPU (READ)
// 0x600006: PPU (WRITE|READ) SPU (WRITE|READ)
var segments_text_v481D = [
	{ name: 'basic_plugins_module', memsize: '0x4E898', filesize: '0x4E898', start: '0xA80000', end: '0xACE898', flags: '0x400005', alignment: '16' },
	{ name: 'cat_setting_plugin_module', memsize: '0x8CC0', filesize: '0x8CC0', start: '0x11C0000', end: '0x11C8CC0', flags: '0x400005', alignment: '16' },
	{ name: 'cell_libac3dec_lib', memsize: '0x40000', filesize: '0x1D180', start: '0x8C0000', end: '0x900000', flags: '0x400007', alignment: '128' },
	{ name: 'cellAdec_Library', memsize: '0xC400', filesize: '0xC400', start: '0x8A0000', end: '0x8AC400', flags: '0x400007', alignment: '128' },
	{ name: 'cellAsfParser2_Library', memsize: '0x1986C', filesize: '0x1986C', start: '0xF70000', end: '0xF8986C', flags: '0x400005', alignment: '16' },
	{ name: 'cellAtrac_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellAtrac3dec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellAtracXdec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellDmux_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellDmuxPamf_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellGifDec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellJpgDec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellM4AacDec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellMP3dec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellMtp_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellPamf_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellSre_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'cellTiffDec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'custom_render_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'eseidle_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'explore_plugin_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'fs_utililty_full', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'libavcdec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'libsmvd4_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'libvdec_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'mms_db_full_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'mms_ext_full_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'mms_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'msmw1_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'msmw2_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'paf_ext_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'paf_web_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'qgl_base_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'sacd_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'silk_base_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'silk_e_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'silk_e_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'silk_npflashplayer9_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'silk_webkit_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'silk_wk_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'soundvisualizer_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'sys_audio_Library', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'vshmain_ext_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'webrender_plugin_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_amgsdk_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_mdimp1_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_mdimp2_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_mdimp3_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_mdimp4_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_mdimp6_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_mdimp8_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'x3_mdimp9_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' },
	{ name: 'xmb_plugin_module', memsize: '0x0000', filesize: '0x00000000', start: '0x00000000', end: '0x00000000', flags: '0x00000000', alignment: '' }
];


// Kernel Modules Loaded
var modules_v481D = [
	{ name: 'basic_plugins_module', memsize: '0x54A34', start: '0x00AD1724', stop: '0x00AD171C', prx: '/dev_flash/vsh/module/basic_plugins.sprx' },
	{ name: 'cat_setting_plugin_module', memsize: '0x945C', start: '0x00B40584', stop: '0x00B4057C', prx: '/dev_flash/vsh/module/category_setting_plugin.sprx' },
	{ name: 'cell_libac3dec_lib', memsize: '0x40150', start: '0x00900098', stop: '0x009000A0', prx: '/dev_flash/sys/external/libac3dec.sprx' },
	{ name: 'cellAdec_Library', memsize: '0xC7F0', start: '0x008B0160', stop: '0x008B0168', prx: '/dev_flash/sys/external/libadec.sprx' },
	{ name: 'cellAsfParser2_Library', memsize: '0x1A1DC', start: '0x011F0140', stop: '0x011F0148', prx: '/dev_flash/sys/internal/libasfparser2.sprx' },
	{ name: 'cellAtrac_Library', memsize: '0x3EF0', start: '0x01170020', stop: '0x01170028', prx: '/dev_flash/sys/external/libatrac3plus.sprx' },
	{ name: 'cellAtrac3dec_Library', memsize: '0xAA00', start: '0x00F90090', stop: '0x00F90098', prx: '/dev_flash/sys/external/libat3dec.sprx' },
	{ name: 'cellAtracXdec_Library', memsize: '0x2A200', start: '0x00F70120', stop: '0x00F70128', prx: '/dev_flash/sys/external/libatxdec.sprx' },
	{ name: 'cellDmux_Library', memsize: '0x2710', start: '0x00EF0010', stop: '0x00EF0018', prx: '/dev_flash/sys/external/libdmux.sprx' },
	{ name: 'cellDmuxPamf_Library', memsize: '0xBB60', start: '0x00F100C8', stop: '0x00F100D0', prx: '/dev_flash/sys/external/libdmuxpamf.sprx' },
	{ name: 'cellGifDec_Library', memsize: '0x18430', start: '0x00B50068', stop: '0x00B50070', prx: '/dev_flash/sys/external/libgifdec.sprx' },
	{ name: 'cellJpgDec_Library', memsize: '0x4C400', start: '0x00E902B8', stop: '0x00E902C0', prx: '/dev_flash/sys/external/libjpgdec.sprx' },
	{ name: 'cellM4AacDec_Library', memsize: '0x884E0', start: '0x02B68180', stop: '0x02B68188', prx: '/dev_flash/sys/external/libm4aacdec.sprx' },
	{ name: 'cellMP3dec_Library', memsize: '0x21BB0', start: '0x02C2008C', stop: '0x02C20094', prx: '/dev_flash/sys/external/libmp3dec.sprx' },
	{ name: 'cellMtp_Library', memsize: '0x194C8', start: '0x01310734', stop: '0x0131072C', prx: '/dev_flash/vsh/module/libmtp.sprx' },
	{ name: 'cellPamf_Library', memsize: '0x3ED4', start: '0xFFFFFFFF', stop: '0xFFFFFFFF', prx: '/dev_flash/sys/external/libpamf.sprx' },
	{ name: 'cellSre_Library', memsize: '0x34340', start: '0xFFFFFFFF', stop: '0xFFFFFFFF', prx: '/dev_flash/sys/external/libsre.sprx' },
	{ name: 'cellTiffDec_Library', memsize: '0x7D420', start: '0x00C11828', stop: '0x00C11830', prx: '/dev_flash/sys/internal/libtiffdec.sprx' },
	{ name: 'custom_render_module', memsize: '0xA2A50', start: '0x00B12B98', stop: '0x00B12BA0', prx: '/dev_flash/vsh/module/custom_render_plugin.sprx' },
	{ name: 'eseidle_module', memsize: '0x5F74', start: '0x00B2008C', stop: '0x00B20094', prx: '/dev_flash/vsh/module/eseidle.sprx' },
	{ name: 'explore_plugin_module', memsize: '0x2E0DB9', start: '0x00D6654C', stop: '0x00D6657C', prx: '/dev_flash/vsh/module/explore_plugin.sprx' },
	{ name: 'fs_utililty_full', memsize: '0x174AC', start: '0x00DF192C', stop: '0x00DF1934', prx: '/dev_flash/sys/internal/libfs_utility_full.sprx' },
	{ name: 'libavcdec_Library', memsize: '0x1B1138', start: '0x011507F0', stop: '0x011507E8', prx: '/dev_flash/sys/external/libavcdec.sprx' },
	{ name: 'libsmvd4_Library', memsize: '0x40380', start: '0x011C0108', stop: '0x011C0100', prx: '/dev_flash/sys/external/libsmvd4.sprx' },
	{ name: 'libvdec_Library', memsize: '0x30E50', start: '0x00ED048C', stop: '0x00ED0484', prx: '/dev_flash/sys/external/libvdec.sprx' },
	{ name: 'mms_db_full_module', memsize: '0xB698', start: '0x0134067C', stop: '0x01340674', prx: '/dev_flash/vsh/module/mms_db_full.sprx' },
	{ name: 'mms_ext_full_module', memsize: '0x16AE0', start: '0x015609E4', stop: '0x015609DC', prx: '/dev_flash/vsh/module/mms_ext_full.sprx' },
	{ name: 'mms_module', memsize: '0xB4B98', start: '0x01327904', stop: '0x013278FC', prx: '/dev_flash/vsh/module/mms.sprx' },
	{ name: 'msmw1_module', memsize: '0x5D72C', start: '0x012602E8', stop: '0x012602E0', prx: '/dev_flash/vsh/module/msmw1.sprx' },
	{ name: 'msmw2_module', memsize: '0x186FCC', start: '0x012774C8', stop: '0x012774C0', prx: '/dev_flash/vsh/module/msmw2.sprx' },
	{ name: 'paf_ext_module', memsize: '0x48BBC', start: '0x00964B1C', stop: '0x00964B14', prx: '/dev_flash/vsh/module/paf_ext.sprx' },
	{ name: 'paf_web_module', memsize: '0x275DC', start: '0x00E30D68', stop: '0x00E30D60', prx: '/dev_flash/vsh/module/paf_web.sprx' },
	{ name: 'qgl_base_module', memsize: '0x76B0C', start: '0x009E1A04', stop: '0x009E1A0C', prx: '/dev_flash/vsh/module/qglbase.sprx' },
	{ name: 'sacd_module', memsize: '0x25198', start: '0x012D01C4', stop: '0x012D01CC', prx: '/dev_flash/vsh/module/sacd.sprx' },
	{ name: 'silk_base_module', memsize: '0x1018F20', start: '0x01B0A464', stop: '0x01B0A4CC', prx: '/dev_flash/vsh/module/silk_base.sprx' },
	{ name: 'silk_e_module', memsize: '0xE750', start: '0x01B40350', stop: '0x01B40380', prx: '/dev_flash/vsh/module/silk_mrcommon.sprx' },
	{ name: 'silk_e_module', memsize: '0xE750', start: '0x01B60318', stop: '0x01B60368', prx: '/dev_flash/vsh/module/silk_mrserver.sprx' },
	{ name: 'silk_npflashplayer9_module', memsize: '0x5CD710', start: '0x02C6C7A0', stop: '0x02C6C790', bytes: 'F821FF917C0802A6F8010080480000BD', prx: '/dev_flash/vsh/module/silk_npflashplayer9.sprx' },
	{ name: 'silk_webkit_module', memsize: '0xEB4D8C', start: '0x02D644F4', stop: '0x02D644EC', prx: '/dev_flash/vsh/module/silk_webkit.sprx' },
	{ name: 'silk_wk_module', memsize: '0x63AB50', start: '0x02E13D88', stop: '0x02E13DE8', prx: '/dev_flash/vsh/module/silk_wk.sprx' },
	{ name: 'soundvisualizer_module', memsize: '0x43E48', start: '0x00A202B8', stop: '0x00A202B0', prx: '/dev_flash/vsh/module/soundvisualizer_plugin.sprx' },
	{ name: 'sys_audio_Library', memsize: '0xE8368', start: '0x00821340', stop: '0x00821338', prx: '/dev_flash/sys/internal/sys_audio.sprx' },
	{ name: 'vshmain_ext_module', memsize: '0x10CE0', start: '0x00A00348', stop: '0x00A00340', prx: '/dev_flash/vsh/module/vshmain_ext.sprx' },
	{ name: 'webrender_plugin_module', memsize: '0x117E58', start: '0x00DC6400', stop: '0x00DC6408', prx: '/dev_flash/vsh/module/webrender_plugin.sprx' },
	{ name: 'x3_amgsdk_module', memsize: '0xDE20', start: '0x01730164', stop: '0x0173015C', prx: '/dev_flash/vsh/module/x3_amgsdk.sprx' },
	{ name: 'x3_mdimp1_module', memsize: '0x1882C', start: '0x016F177C', stop: '0x016F1774', prx: '/dev_flash/vsh/module/x3_mdimp1.sprx' },
	{ name: 'x3_mdimp2_module', memsize: '0xF8F4', start: '0x01710AC4', stop: '0x01710ABC', prx: '/dev_flash/vsh/module/x3_mdimp2.sprx' },
	{ name: 'x3_mdimp3_module', memsize: '0x1B2BC', start: '0x015905AC', stop: '0x015905A4', prx: '/dev_flash/vsh/module/x3_mdimp3.sprx' },
	{ name: 'x3_mdimp4_module', memsize: '0x2151C', start: '0x015C1124', stop: '0x015C111C', prx: '/dev_flash/vsh/module/x3_mdimp4.sprx' },
	{ name: 'x3_mdimp6_module', memsize: '0x99E70', start: '0x0165759C', stop: '0x01657594', prx: '/dev_flash/vsh/module/x3_mdimp6.sprx' },
	{ name: 'x3_mdimp8_module', memsize: '0x6C84', start: '0x017503DC', stop: '0x017503D4', prx: '/dev_flash/vsh/module/x3_mdimp8.sprx' },
	{ name: 'x3_mdimp9_module', memsize: '0x3A8B0', start: '0x016C1CF4', stop: '0x016C1CEC', prx: '/dev_flash/vsh/module/x3_mdimp9.sprx' },
	{ name: 'xmb_plugin_module', memsize: '0x1E164', start: '0x00A714FC', stop: '0x00A714F4', prx: '/dev_flash/vsh/module/xmb_plugin.sprx' }
];
//console.table(fullmem_v481D);
//console.table(idps_v481D);
//console.table(modules_v481D);

