import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('У файлі немає контактів для видалення.');
      return;
    }

    contacts.pop(); 

    await writeContacts(contacts);

    console.log('Останній контакт успішно видалено.');
  } catch (error) {
    console.error('Помилка видалення останнього контакту:', error);
  }
};

removeLastContact();
