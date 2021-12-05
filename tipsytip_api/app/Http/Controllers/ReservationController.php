<?php

namespace App\Http\Controllers;

use App\Models\Reservations;
use Illuminate\Http\Request;

class ReservationController extends Controller
{
    public function index(){
        return Reservations::all();
    }

    public function show($id)
    {
        return Reservations::find($id);
    }

    public function store(Request $request)
    {
        $request->validate([
            'dateReservation' => 'required',
            'heureReservation' => 'required',
            'idUtilisateur' => 'required',
            'idRestaurant' => 'required'
        ]);
        $reservation = new Reservations([
            'dateReservation' => request('dateReservation'),
            'heureReservation' => request('heureReservation'),
            'idUtilisateur' => request('idUtilisateur'),
            'idRestaurant' => request('idRestaurant')
        ]);
        $reservation->save();
        return $reservation;
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'dateReservation' => 'required',
            'heureReservation' => 'required',
            'idUtilisateur' => 'required',
            'idRestaurant' => 'required'
        ]);
        $reservation = Reservations::find($id);
        
            $reservation->dateReservation = request('dateReservation');
            $reservation->heureReservation = request('heureReservation');
            $reservation->idUtilisateur = request('idUtilisateur');
            $reservation->idRestaurant= request('idRestaurant');
            $reservation->save();
        
        return $reservation;
    }

    public function destroy($id)
    {
        return Reservations::destroy($id);
    }
}
