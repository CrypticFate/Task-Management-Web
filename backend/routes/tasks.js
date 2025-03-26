router.get('/', auth, taskController.getAllTasks);
router.post('/', auth, taskController.createTask);
router.get('/categories', auth, taskController.getCategories);