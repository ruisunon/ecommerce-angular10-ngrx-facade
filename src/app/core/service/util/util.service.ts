// Then you can use it as decorator in your component
// @AutoUnsubscribe
// export class YourComponent  {
// }
// but you still need to store subscriptions as component properties. 
// And when you navigating out of component, AutoUnsubscribe function will occurs.
export function AutoUnsubscribe(constructor) {
  const original = constructor.prototype.ngOnDestroy;

  constructor.prototype.ngOnDestroy = function () {
    for (const prop in this) {
      if (prop) {
        const property = this[prop];
        if (property && typeof property.unsubscribe === 'function') {
          property.unsubscribe();
        }
      }
    }

    if (original && typeof original === 'function') {
      original.apply(this, arguments);
    }
  };
}
