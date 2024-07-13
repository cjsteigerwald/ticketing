import mongoose, { mongo } from 'mongoose';

// An interface that describes the properties
// that are required to create a new User
interface UserAttrs {
	email: string;
	password: string;
}

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

// static interface to create User with TypeScript
userSchema.statics.build = (attrs: UserAttrs) => {
	return new User(attrs);
};

const User = mongoose.model('User', userSchema);

export { User };
