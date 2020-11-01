import { isIOS } from '../utils/device';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = isIOS ? 'Avenir-Medium' : 'Roboto';
export const FONT_FAMILY_BOLD = isIOS ? 'AvenirNext-Bold' : 'Roboto';
