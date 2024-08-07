import { ContactsModel } from "../db/contactsModel.js"
import { calculatePaginationData } from "../utils/calculatePaginationData.js"
// import { SORT_ORDER } from "../constants/index.js";

export const getAllContacts = async ({ page, perPage, sortOrder, sortBy, filters={}, userId }) => {
    const limit = perPage;
    const skip = (page - 1) * perPage;

    const contactsQuery = ContactsModel.find({userId})

    if (filters.contactType) {
    contactsQuery.where('contactType').equals(filters.contactType);}
    if (filters.isFavourite) {
    contactsQuery.where('isFavourite').equals(filters.isFavourite);}
     
    const [contactsCount, contacts] = await Promise.all([
    ContactsModel.find({userId}).merge(contactsQuery).countDocuments(),
    contactsQuery.skip(skip).limit(limit).sort({ [sortBy]: sortOrder }).exec(),
    ]);
    
    // const contactsCount = await ContactsModel.find()
    //     .merge(contactsQuery)
    //     .countDocuments();
    
    // const contacts = await contactsQuery.skip(skip).limit(limit).sort({ [sortBy]: sortOrder }).exec();

    const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
}

export const getContactById = (contactId, userId) => {
    const contact = ContactsModel.findOne({_id: contactId, userId })
    return contact
}

export const createContact = (payload) => {
    const contact = ContactsModel.create({
    ...payload,
    userId: payload.userId,
    });
    return contact
}

export const updateContact = async (contactId, payload, userId, options = {}) => {
    const rawResult = await ContactsModel.findOneAndUpdate({ _id: contactId, userId }, payload, { new: true, includeResultMetadata: true, ...options });
    if (!rawResult || !rawResult.value) return null;
    console.log(rawResult)
    return {
        contact: rawResult.value,
        isNew: Boolean(rawResult?.lastErrorObject?.upserted),
    };
};

export const deleteContact = (contactId, userId) => {
    const contact = ContactsModel.findOneAndDelete({ _id: contactId, userId });
    return contact
}