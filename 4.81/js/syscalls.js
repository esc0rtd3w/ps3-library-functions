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


sys_trace_v481D =
{
	sys_trace_create: 0x03C, // 
	sys_trace_start: 0x03D, // 
	sys_trace_stop: 0x03E, // 
	sys_trace_update_top_index: 0x03F, // 
	sys_trace_destroy: 0x040, // 
	sys_trace_drain: 0x041, // 
	sys_trace_attach_process: 0x042, // 
	sys_trace_allocate_buffer: 0x043, // 
	sys_trace_free_buffer: 0x044, // 
	sys_trace_create2: 0x045, // 
	sys_trace_create2_in_cbepm: 0x04D, // 
	sys_trace_: 0x04E, // 
}


sys_timer_v481D =
{
	sys_timer_create: 0x046, // int sys_timer_create(sys_timer_t * timer_id);
	sys_timer_destroy: 0x047, // int sys_timer_destroy(sys_timer_t timer_id);
	sys_timer_get_information: 0x048, // int sys_timer_get_information(sys_timer_t timer_id, sys_timer_information_t * info);
	sys_timer_start: 0x049, // int sys_timer_start(sys_timer_t timer_id, system_time_t base_time, usecond_t period);
	sys_timer_stop: 0x04A, // int sys_timer_stop(sys_timer_t timer_id);
	sys_timer_connect_event_queue: 0x04B, // int sys_timer_connect_event_queue(sys_timer_t timer_id, sys_event_queue_t queue_id, uint64_t name, uint64_t data1, uint64_t data2);
	sys_timer_disconnect_event_queue: 0x04C, // int sys_timer_disconnect_event_queue(sys_timer_t timer_id);
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_interrupt_v481D =
{
	sys_interrupt_tag_create: 0x050, // int sys_interrupt_tag_create(sys_interrupt_tag_t * intrtag, sys_irqoutlet_id_t irq, sys_hw_thread_t hwthread);
	sys_interrupt_tag_destroy: 0x051, // int sys_interrupt_tag_destroy(sys_interrupt_tag_t intrtag);
	sys_interrupt_thread_establish: 0x054, // int sys_interrupt_thread_establish(sys_interrupt_thread_handle_t * ih, sys_interrupt_tag_t intrtag, uint64_t intrthread, uint64_t arg1, uint64_t arg2);
	sys_interrupt_thread_eoi: 0x058, // void sys_interrupt_thread_eoi(void);
	sys_interrupt_thread_disestablish: 0x059, // int sys_interrupt_thread_disestablish(sys_interrupt_thread_handle_t ih);
}


sys_event_v481D =
{
	sys_event_flag_create: 0x052, // int sys_event_flag_create(sys_event_flag_t * id, sys_event_flag_attribute_t * attr, uint64_t init);
	sys_event_flag_destroy: 0x053, // int sys_event_flag_destroy(sys_event_flag_t id);
	sys_event_flag_wait: 0x055, // int sys_event_flag_wait(sys_event_flag_t id, uint64_t bitptn, uint32_t mode, uint64_t * result, usecond_t timeout);
	sys_event_flag_trywait: 0x056, // int sys_event_flag_trywait(sys_event_flag_t id, uint64_t bitptn, uint32_t mode, uint64_t * result);
	sys_event_flag_set: 0x057, // int sys_event_flag_set(sys_event_flag_t id, uint64_t bitptn);
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_semaphore_v481D =
{
	sys_semaphore_create: 0x05A, // int sys_semaphore_create(sys_semaphore_t * sem, sys_semaphore_attribute_t * attr, sys_semaphore_value_t initial_val, sys_semaphore_value_t max_val);
	sys_semaphore_destroy: 0x05B, // int sys_semaphore_destroy(sys_semaphore_t sem);
	sys_semaphore_wait: 0x05C, // int sys_semaphore_wait(sys_semaphore_t sem, usecond_t timeout);
	sys_semaphore_trywait: 0x05D, // int sys_semaphore_trywait(sys_semaphore_t sem);
	sys_semaphore_post: 0x05E, // int sys_semaphore_post(sys_semaphore_t sem, sys_semaphore_value_t val);
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_lwmutex_v481D =
{
	sys_lwmutex_create: 0x05F, // int sys_lwmutex_create(sys_lwmutex_t *lwmutex, sys_lwmutex_attribute_t *attr)
	sys_lwmutex_destroy: 0x060, // int sys_lwmutex_destroy(sys_lwmutex_t *lwmutex)
	sys_lwmutex_lock: 0x061, // int sys_lwmutex_lock(sys_lwmutex_t *lwmutex, usecond_t timeout)
	sys_lwmutex_trylock: 0x062, // int sys_lwmutex_trylock(sys_lwmutex_t *lwmutex)
	sys_lwmutex_unlock: 0x063, // int sys_lwmutex_unlock(sys_lwmutex_t *lwmutex)
}


sys_mutex_v481D =
{
	sys_mutex_create: 0x064, // int sys_mutex_create(sys_mutex_t * mutex_id, sys_mutex_attribute_t * attr);
	sys_mutex_destroy: 0x065, // int sys_mutex_destroy(sys_mutex_t mutex_id);
	sys_mutex_lock: 0x066, // int sys_mutex_lock(sys_mutex_t mutex_id, usecond_t timeout);
	sys_mutex_trylock: 0x067, // int sys_mutex_trylock(sys_mutex_t mutex_id);
	sys_mutex_unlock: 0x068, // int sys_mutex_unlock(sys_mutex_t mutex_id);
}


sys_cond_v481D =
{
	sys_cond_create: 0x069, // int sys_cond_create(sys_cond_t * cond_id, sys_mutex_t mutex_id, sys_cond_attribute_t * attr);
	sys_cond_destroy: 0x06A, // int sys_cond_destroy(sys_cond_t cond_id);
	sys_cond_wait: 0x06B, // int sys_cond_wait(sys_cond_t cond_id, usecond_t timeout);
	sys_cond_signal: 0x06C, // int sys_cond_signal(sys_cond_t cond_id);
	sys_cond_signal_all: 0x06D, // int sys_cond_signal_all(sys_cond_t cond_id);
	sys_cond_signal_to: 0x06E, // int sys_cond_signal_to(sys_cond_t cond_id, sys_ppu_thread_t thread);
}


sys_lwcond_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_rwlock_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_time_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_spu_sys_raw_spu_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_vm_sys_memory_sys_mmapper_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_uart_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_game_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_sm_sys_ctrl_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_tty_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_overlay_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_prx_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_hid_manager_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_config_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_usbd_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_gl819_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_pad_manager_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_bluetooth_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_bluetooth_usb_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_bluetooth_usb_audio_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_storage_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_io_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_gpio_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_fsw_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_rsx_audio_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_rsx_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_bdemu_v481D =
{
	aaaaaa: 0x000, // 
}


sys_net_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


lv2_fs_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_process_socket_service_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_ss_sys_get_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_deci3_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}


sys_dbg_v481D =
{
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
}

