// Why did I create this helper?

// As a good practice I'm creating a vanila javascript helper that will
// handle all business logic, this is pretty important to keep projects
// isolated and non-dependent from any framework. For example if at some
// point you decide to use angular, vue.js or whatever you want you won't
// need to refactor your entire app. (Samuel)

const ICONS = './icons';

export const generateImageSrc = (type, power, service) => {
  const upperleft = 'none';
  const upperright = service ? 'service' : 'none';
  const lowerright = power ? 'power' : 'none';
  const lowerleft = 'none';

  return `${ICONS}/${type}/types-${type}-${upperleft}-${upperright}-${lowerright}-${lowerleft}.png`;
}
