import { actions, types } from '../../orders';

describe('placeOrder()', function () {
    it('should have the right action type', function () {
        const action = actions.placeOrder({});
        expect(action.type).toEqual(types.PLACE_ORDER);
    });

    /**
     * cusotmerName: String
     * createdAt: Number
     * cone: Boolean
     * scoops: Object (all of the scoops added to the order)
     */

    it('should contain the customer name in the payload', function () {
        const action = actions.placeOrder({
            customerName: 'Cindy',
        });
        expect(action.payload.customerName).toEqual('Cindy');
    });

    it('should contain the date of creation in the payload', function () {
        const action = actions.placeOrder({
            createdAt: 123,
        });
        expect(action.payload.createdAt).toEqual(123);
    });

    it('should contain the current date of creation in the payload if no date is given', function () {
        const action = actions.placeOrder({});
        expect(typeof action.payload.createdAt).toEqual('number');
    });

    it('should contain the cone/cup option in the payload', function () {
        const action = actions.placeOrder({
            cone: false,
        });
        expect(action.payload.cone).toEqual(false);
    });

    it('should default to a cone if no cone option is given', function() {
        const action = actions.placeOrder({});
        expect(action.payload.cone).toEqual(true);
    });

    it('should contain the scoops object in the payload', function () {
        const action = actions.placeOrder({
            scoops: {
                'vanilla': 1
            }
        });
    });

});