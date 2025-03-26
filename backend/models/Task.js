const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    dueDate: Date,
    priority: { type: String, enum: ['low', 'medium', 'high'] },
    category: String,
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  });