<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;

class RadResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'student' => User::find($this->student),
            'profesor' => User::find($this->profesor),
            'datum_predaje' => $this->datum_predaje->format('Y-m-d'),
            'naziv' => $this->naziv,
             
        ];
    }
}
