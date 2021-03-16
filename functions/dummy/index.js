exports.handler = async (event, context, handler) => {
  console.log('event', event);
  handler(null, {event})
};
