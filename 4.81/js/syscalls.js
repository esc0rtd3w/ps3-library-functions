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
	sys_timer_usleep: 0x08D, // int sys_timer_usleep(usecond_t sleep_time);
	sys_timer_sleep: 0x08E, // int sys_timer_sleep(second_t sleep_time);
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
	sys_event_flag_clear: 0x076, // int sys_event_flag_clear(sys_event_flag_t id, uint64_t bitptn);
	unk_0x077: 0x077, // root / int syscall(119, uint64_t *real_time_clock);
	sys_event_queue_create: 0x080, // int sys_event_queue_create(sys_event_queue_t * equeue_id, sys_event_queue_attribute_t * attr, sys_ipc_key_t event_queue_key, int size);
	sys_event_queue_destroy: 0x081, // int sys_event_queue_destroy(sys_event_queue_t equeue_id, int mode);
	sys_event_queue_receive: 0x082, // int sys_event_queue_receive(sys_event_queue_t equeue_id, sys_event_t * event, usecond_t timeout);
	sys_event_queue_tryreceive: 0x083, // int sys_event_queue_tryreceive(sys_event_queue_t equeue_id, sys_event_t * event_array, int size, int *number);
	sys_event_flag_cancel: 0x084, // int sys_event_flag_cancel(sys_event_flag_t id, int *num);
	sys_event_queue_drain: 0x085, // int sys_event_queue_drain(sys_event_queue_t equeue_id);
	sys_event_port_create: 0x086, // int sys_event_port_create(sys_event_port_t * eport_id, int port_type, uint64_t name);
	sys_event_port_destroy: 0x087, // int sys_event_port_destroy(sys_event_port_t eport_id);
	sys_event_port_connect_local: 0x088, // int sys_event_port_connect_local(sys_event_port_t event_port_id, sys_event_queue_t event_queue_id);
	sys_event_port_disconnect: 0x089, // int sys_event_port_disconnect(sys_event_port_t event_port_id);
	sys_event_port_send: 0x08A, // int sys_event_port_send(sys_event_port_t eport_id, unint64_t data1, uint64_t data2, uint64_t data3);
	sys_event_flag_get: 0x08B, // int sys_event_flag_get(sys_event_flag_t id, uint64_t * bitptn);
	sys_event_port_connect_ipc: 0x08C, // int sys_event_port_connect_ipc(sys_event_port_t eport_id, sys_ipc_key_t event_queue_key);
}


sys_semaphore_v481D =
{
	sys_semaphore_create: 0x05A, // int sys_semaphore_create(sys_semaphore_t * sem, sys_semaphore_attribute_t * attr, sys_semaphore_value_t initial_val, sys_semaphore_value_t max_val);
	sys_semaphore_destroy: 0x05B, // int sys_semaphore_destroy(sys_semaphore_t sem);
	sys_semaphore_wait: 0x05C, // int sys_semaphore_wait(sys_semaphore_t sem, usecond_t timeout);
	sys_semaphore_trywait: 0x05D, // int sys_semaphore_trywait(sys_semaphore_t sem);
	sys_semaphore_post: 0x05E, // int sys_semaphore_post(sys_semaphore_t sem, sys_semaphore_value_t val);
	sys_semaphore_get_value: 0x072, // int sys_semaphore_get_value(sys_semaphore_t sem, sys_semaphore_value_t * val);
	unk_0x073: 0x073, // 4 params
	unk_0x074: 0x074, // 3 params
	unk_0x075: 0x075, // 1 params : sys_lwmutex_t *lwmutex
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
	sys_lwcond_create: 0x06F, // int sys_lwcond_create(sys_lwcond_t *lwcond, sys_lwmutex_t *lwmutex, sys_lwcond_attribute_t *attr)
	sys_lwcond_destroy: 0x070, // int sys_lwcond_destroy(sys_lwcond_t *lwcond)
	sys_lwcond_queue_wait: 0x071, // 3 params
}


sys_rwlock_v481D =
{
	sys_rwlock_create: 0x078, // int sys_rwlock_create(sys_rwlock_t * rw_lock_id, sys_rwlock_attribute_t * attr);
	sys_rwlock_destroy: 0x079, // int sys_rwlock_destroy(sys_rwlock_t rw_lock_id);
	sys_rwlock_rlock: 0x07A, // int sys_rwlock_rlock(sys_rwlock_t rw_lock_id, usecond_t timeout);
	sys_rwlock_tryrlock: 0x07B, // int sys_rwlock_tryrlock(sys_rwlock_t rw_lock_id);
	sys_rwlock_runlock: 0x07C, // int sys_rwlock_runlock(sys_rwlock_t rw_lock_id);
	sys_rwlock_wlock: 0x07D, // int sys_rwlock_wlock(sys_rwlock_t rw_lock_id, usecond_t timeout);
	sys_rwlock_trywlock: 0x07E, // int sys_rwlock_trywlock(sys_rwlock_t rw_lock_id);
	sys_rwlock_wunlock: 0x07F, // int sys_rwlock_wunlock(sys_rwlock_t rw_lock_id);
	sys_rwlock_trywlock: 0x094, // int sys_rwlock_trywlock(sys_rwlock_t rw_lock_id);
}


sys_time_v481D =
{
	sys_time_set_timezone: 0x08F, // int sys_time_set_timezone(int timezone, int summertime)
	sys_time_get_timezone: 0x090, // int sys_time_get_timezone(int *timezone, int *summertime)
	sys_time_get_current_time: 0x091, // int sys_time_get_current_time(sys_time_sec_t * sec, sys_time_nsec_t * nsec);
	sys_time_set_current_time: 0x092, // int sys_time_set_current_time(uint64_t sec, uint64_t nsec);
	sys_time_get_timebase_frequency: 0x093, // uint64_t sys_time_get_timebase_frequency(void);
}


sys_spu_sys_raw_spu_v481D =
{
	sys_raw_spu_create_interrupt_tag: 0x096, // int sys_raw_spu_create_interrupt_tag(sys_raw_spu_t id,sys_class_id_t class_id, sys_hw_thread_t hwthread, sys_interrupt_tag_t *intrtag)
	sys_raw_spu_set_int_mask: 0x097, // int sys_raw_spu_set_int_mask(sys_raw_spu_t id, sys_class_id_t class_id, uint64_t mask)
	sys_raw_spu_get_int_mask: 0x098, // int sys_raw_spu_get_int_mask(sys_raw_spu_t id, sys_class_id_t class_id, uint64_t *mask)
	sys_raw_spu_set_int_stat: 0x099, // int sys_raw_spu_set_int_stat(sys_raw_spu_t id, sys_class_id_t class_id, uint64_t stat)
	sys_raw_spu_get_int_stat: 0x09A, // int sys_raw_spu_get_int_stat(sys_raw_spu_t id, sys_class_id_t class_id, uint64_t *stat)
	sys_spu_image_get_information: 0x09B, // int sys_spu_image_get_information?(sys_spu_image_t *img, out:uint[4],out:uint[4])
	sys_spu_image_open: 0x09C, // int sys_spu_image_open(sys_spu_image_t *img, const char *path)
	sys_spu_image_import: 0x09D, // int sys_spu_image_import(sys_spu_image_t *img, const void *src, uint32_t type)
	sys_spu_image_close: 0x09E, // int sys_spu_image_close(sys_spu_image_t *img);
	sys_raw_spu_load: 0x09F, // 3 Params ( sys_spu_image_t * img, sys_addr_t alloc_addr, int size? ), needs much more proper information
	sys_raw_spu_create: 0x0A0, // int sys_raw_spu_create(sys_raw_spu_t *id, sys_raw_spu_attribute_t *attr)
	sys_raw_spu_destroy: 0x0A1, // int sys_raw_spu_destroy(sys_raw_spu_t id)
	sys_raw_spu_read_puint_mb: 0x0A3, // int sys_raw_spu_read_puint_mb(sys_raw_spu_t id, uint32_t *value)
	sys_spu_thread_get_exit_status: 0x0A5, // int sys_spu_thread_get_exit_status(sys_spu_thread_t id, int *status)
	sys_spu_thread_set_argument: 0x0A6, // int sys_spu_thread_set_argument(sys_spu_thread_t id, sys_spu_thread_argument_t *arg)
	sys_spu_thread_group_start_on_exit: 0x0A7, // 
	sys_spu_initialize: 0x0A9, // int sys_spu_initialize(unsigned int max_usable_spu, unsigned int max_raw_spu)
	sys_spu_thread_group_create: 0x0AA, // int sys_spu_thread_group_create(sys_spu_thread_group_t *id, unsigned int num, int prio, sys_spu_thread_group_attribute_t *attr)
	sys_spu_thread_group_destroy: 0x0AB, // int sys_spu_thread_group_destroy(sys_spu_thread_group_t id)
	sys_spu_thread_initialize: 0x0AC, // int sys_spu_thread_initialize(sys_spu_thread_t *thread,sys_spu_thread_group_t group,uint spu_num,sys_spu_image_t *img,sys_spu_thread_attribute_t *attr,sys_spu_thread_argument_t *arg)
	sys_spu_thread_group_start: 0x0AD, // int sys_spu_thread_group_start(sys_spu_thread_group_t id)
	sys_spu_thread_group_suspend: 0x0AE, // int sys_spu_thread_group_suspend(sys_spu_thread_group_t id)
	sys_spu_thread_group_resume: 0x0AF, // int sys_spu_thread_group_resume(sys_spu_thread_group_t id)
	sys_spu_thread_group_yield: 0x0B0, // int sys_spu_thread_group_yield(sys_spu_thread_group_t id)
	sys_spu_thread_group_terminate: 0x0B1, // int sys_spu_thread_group_terminate(sys_spu_thread_group_t id, int value)
	sys_spu_thread_group_join: 0x0B2, // int sys_spu_thread_group_join(sys_spu_thread_group_t gid, int *cause, int *status)
	sys_spu_thread_group_set_priority: 0x0B3, // int sys_spu_thread_group_set_priority(sys_spu_thread_group_t id, int priority)
	sys_spu_thread_group_get_priority: 0x0B4, // int sys_spu_thread_group_get_priority(sys_spu_thread_group_t id, int *priority)
	sys_spu_thread_write_ls: 0x0B5, // int sys_spu_thread_write_ls(sys_spu_thread_t id, uint32_t address, uint64_t value, size_t type)
	sys_spu_thread_read_ls: 0x0B6, // int sys_spu_thread_read_ls(sys_spu_thread_t id, uint32_t address, uint64_t *value, size_t type)
	sys_spu_thread_write_snr: 0x0B8, // int sys_spu_thread_write_snr(sys_spu_thread_t id, int number, uint32_t value)
	sys_spu_thread_group_connect_event: 0x0B9, // int sys_spu_thread_group_connect_event(sys_spu_thread_group_t id, sys_event_queue_t eq, sys_event_type_t et)
	sys_spu_thread_group_disconnect_event: 0x0BA, // int sys_spu_thread_group_disconnect_event(sys_spu_thread_group_t id, sys_event_type_t et)
	sys_spu_thread_set_spu_cfg: 0x0BB, // int sys_spu_thread_set_spu_cfg(sys_spu_thread_t id, uint64_t value)
	sys_spu_thread_get_spu_cfg: 0x0BC, // int sys_spu_thread_get_spu_cfg(sys_spu_thread_t id, uint64_t *value)
	sys_spu_thread_write_spu_mb: 0x0BE, // int sys_spu_thread_write_spu_mb(sys_spu_thread_t id, uint32_t value);
	sys_spu_thread_connect_event: 0x0BF, // int sys_spu_thread_connect_event(sys_spu_thread_t id, sys_event_queue_t eq, sys_event_type_t et, uint8_t spup)
	sys_spu_thread_disconnect_event: 0x0C0, // int sys_spu_thread_disconnect_event(sys_spu_thread_t id, sys_event_type_t et, uint8_t spup)
	sys_spu_thread_bind_queue: 0x0C1, // int sys_spu_thread_bind_queue(sys_spu_thread_t id,sys_event_queue_t spuq,uint32_t spuq_num)
	sys_spu_thread_unbind_queue: 0x0C2, // int sys_spu_thread_unbind_queue(sys_spu_thread_t id, uint32_t spuq_num)
	sys_raw_spu_set_spu_cfg: 0x0C4, // int sys_raw_spu_set_spu_cfg(sys_raw_spu_t id, uint32_t value)
	sys_raw_spu_get_spu_cfg: 0x0C5, // int sys_raw_spu_get_spu_cfg(sys_raw_spu_t id, uint32_t *value)
	sys_spu_thread_recover_page_fault: 0x0C6, // int sys_spu_thread_recover_page_fault(sys_spu_thread_t id)
	sys_raw_spu_recover_page_fault: 0x0C7, // int sys_raw_spu_recover_page_fault(sys_raw_spu_t id)
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
	aaaaaa: 0x000, // 
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

