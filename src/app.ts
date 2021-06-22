import { GOOGLE_API_KEY } from '../API_KEYS';

const form = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // TODO: Send this to Google's API!
  // https://developers.google.com/maps/documentation/geocoding/overview
}

form.addEventListener('submit', searchAddressHandler);
