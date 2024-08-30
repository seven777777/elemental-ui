import { withInstall } from '@elemental-ui/utils';
import Button from './src/button.vue';
import ButtonGroup from './src/button-group.vue';

export const EtButton = withInstall(Button);
export const EtButtonGroup = withInstall(ButtonGroup);

export default EtButton;

export * from './src/button';
