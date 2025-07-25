import {Schema, model} from "mongoose"

const sessionsSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users', unique: true, required: true, },
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    accessTokenValidUntil: {type: Date, required: true},
    refreshTokenValidUntil: {type: Date, required: true},
},
    {timestamps: false, versionKey: false},
)

export const Session = model ("sessions", sessionsSchema)