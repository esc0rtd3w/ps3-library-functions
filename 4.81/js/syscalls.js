/*
   System Calls PS3 DEX
*/

// Thanks to PSDevWiki for info :)
// http://www.psdevwiki.com/ps3/LV2_Functions_and_Syscalls#process_socket_service_syscalls



sys_process_v481D =
{
	sys_process_getpid: 0x001, // sys_pid_t sys_process_getpid(void);
	sys_process_wait_for_child: 0x002, // root / 3 params: sys_pid_t, uint32_t *status, unk=0
	sys_process_exit : 0x003, // int sys_process_exit(int)
	sys_process_get_status : 0x004, // dbg / int sys_process_get_status(sys_pid_t pid)
	sys_process_detach_child : 0x005, // dbg / 1 param
	sys_process_get_number_of_object : 0x00C, // int sys_process_get_number_of_object(uint32_t object_type, uint32_t* count);
	sys_process_get_id : 0x00D, // int sys_process_get_id(uint32_t object, uint32_t * buff, size_t size, size_t * set_size);
	sys_process_is_spu_lock_line_reservation_address : 0x00E, // int sys_process_is_spu_lock_line_reservation_address(sys_addr_t addr, uint64_t flags);
	sys_process_getppid : 0x012, // sys_pid_t sys_process_getppid(void);
	sys_process_kill : 0x013, // int sys_process_kill(sys_pid_t pid);
	_sys_process_spawn : 0x015, // dbg / int sys_process_spawn(int *pid, int prio, uint64_t flags, void *stack, int stack_size, int unk1, int unk2)
	sys_process_exit : 0x016, // void sys_process_exit(int error_code,0,0)
	sys_process_wait_for_child2 : 0x017, // dbg / 6 params
	unk_0x018 : 0x018, // dbg / 8 params, spawns a self
	sys_process_get_sdk_version : 0x019, // 2 params :sys_pid_t pid, uint8_t outbuf[4]
	_sys_process_exit as well : 0x01A, // 4 params (calls sys_process_exit)
	unk_0x01B : 0x01B, // dbg / 8 params, spawns a self
	_sys_process_get_number_of_object : 0x01C, // root / int sys_process_get_number_of_object(uint32_t object)
	sys_process_get_id : 0x01D, // root / same as syscall13 just with root flag check, same input etc.
	
	/*
	00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F
	00000000 01 < -------Title ID------- > 00 00 00 00 00 00  �BLES80608......
	00000010 < ---ExtraLoadFlag--- > < load HUDRSX libProf >  ................
	00000020 .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..  ................
	00000030 .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..  ................
	@0x18 can load libgpad.sprx from app_home
	*/
	_sys_process_get_paramsfo : 0x01E, // int _sys_process_get_paramsfo(uint8_t buffer[0x40]); (more info: #sys_process_get_paramsfo)
	
	sys_process_get_ppu_guid : 0x01F // sys_addr_t sys_process_get_ppu_guid(void);
}


sys_ppu_thread_v481D =
{
	sys_ppu_thread_exit: 0x029, // int sys_ppu_thread_exit(int errorcode)
	sys_ppu_thread_yield: 0x02B, // void sys_ppu_thread_yield(void);
	sys_ppu_thread_join: 0x02C, // int sys_ppu_thread_join(sys_ppu_thread_t thread_id, uint64_t * vptr);
	sys_ppu_thread_detach: 0x02D, // int sys_ppu_thread_detach(sys_ppu_thread_t thread_id);
	sys_ppu_thread_get_join_state: 0x02E, // void sys_ppu_thread_get_join_state(int *isjoinable);
	
	//Flags are checked when 3071 > prio < 3199
	sys_ppu_thread_set_priority: 0x02F, // dbg / int sys_ppu_thread_set_priority(sys_ppu_thread_t thread_id, int prio);
	
	sys_ppu_thread_get_priority: 0x030, // int sys_ppu_thread_get_priority(sys_ppu_thread_t thread_id, int *prio);
	sys_ppu_thread_get_stack_information: 0x031, // int sys_ppu_thread_get_stack_information(sys_ppu_thread_stack_t * info);
	sys_ppu_thread_stop: 0x032, // root / int sys_ppu_thread_stop(sys_ppu_thread_t thread_id);
	sys_ppu_thread_restart: 0x033, // root / int sys_ppu_thread_restart(void);
	sys_ppu_thread_create: 0x034, // dbg / int sys_ppu_thread_create(sys_ppu_thread_t *thread_id, & void (*entry)(uint64_t), uint64_t arg, 0, int prio, size_t stacksize, uint64_t flags, const char *threadname);
	sys_ppu_thread_start: 0x035, // int sys_ppu_thread_start(sys_ppu_thread_t thread_id);
	unk_0x036: 0x036, // root / syscall(0x036, 0x109/0x111, out: uint8[4]), pu_thread get (kernel) allocation information
	unk_0x037: 0x037, // root / syscall(0x037, 0x111, 0> int <0x100), pu_thread set (kernel) allocation? information
	sys_ppu_thread_rename: 0x038, // int sys_ppu_thread_rename(sys_ppu_thread_t thread_id, const char *name);
	sys_ppu_thread_recover_page_fault: 0x039, // int sys_ppu_thread_recover_page_fault(sys_ppu_thread_t thread_id);
	sys_ppu_thread_get_page_fault_context: 0x03A // int sys_ppu_thread_get_page_fault_context(sys_ppu_thread_t thread_id, sys_ppu_thread_icontext_t * ctxp);
}

